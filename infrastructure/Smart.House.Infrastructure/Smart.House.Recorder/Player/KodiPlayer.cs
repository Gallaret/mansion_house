using Newtonsoft.Json.Linq;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace Smart.House.Recorder.Player
{
    public class KodiPlayer
    {
        private static JObject defaultPlayerOptions = new JObject(
            new JProperty("repeat", null),
            new JProperty("resume", false),
            new JProperty("shuffled", null));


        public async Task Play(string methodName)
        {
            //JObject parameters = new JObject(
            //                    new JProperty("properties",
            //                        new JArray("title", "genre", "year", "rating", "director", "trailer", "tagline", "plot", "plotoutline", "originaltitle", "lastplayed", "playcount", "writer", "studio", "mpaa", "cast", "country", "imdbnumber", "runtime", "set", "showlink", "streamdetails", "top250", "votes", "fanart", "thumbnail", "file", "sorttitle", "resume", "setid", "dateadded", "tag", "art")
            //));
            JObject playerItem = new JObject(new JProperty("movieid", 1));

            JObject parameters = new JObject(
                                           new JProperty("item", playerItem),
                                           new JProperty("options", defaultPlayerOptions));

            await ExecuteRPCRequest(methodName, parameters);
            //JArray movieListObject = (JArray)response["result"]["movies"];
        }


        public static async Task<JObject> ExecuteRPCRequest(string methodName, JObject parameters = null)
        {
            JObject requestObject = ConstructRequestObject(methodName, parameters);
            string requestData = requestObject.ToString();
            HttpResponseMessage response = await KodiPlayer.ExecuteRequest(requestData);
            if (response.StatusCode == HttpStatusCode.OK)
            {
                string responseString = await response.Content.ReadAsStringAsync();
                JObject responseObject = JObject.Parse(responseString);
                return responseObject;
            }
            else
            {
                return new JObject();
            }
        }

        private static async Task<HttpResponseMessage> ExecuteRequest(string requestData)
        {
            HttpClientHandler handler = new HttpClientHandler();
            HttpClient httpClient = new HttpClient(handler);
            string uriString = "http://" + "192.168.0.206" + ":" + "8080" + "/jsonrpc?request=";
            httpClient.BaseAddress = new Uri(uriString);
            HttpRequestMessage request = new HttpRequestMessage(HttpMethod.Post, "");

            request.Content = new StringContent(requestData);
            request.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/json"); //Required to be recognized as valid JSON request.

            //if (CurrentConnection.HasCredentials())
            //    request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(String.Format("{0}:{1}", CurrentConnection.Username, CurrentConnection.Password))));

            HttpResponseMessage response = await httpClient.SendAsync(request);
            return response;
        }

        private static JObject ConstructRequestObject(string methodName, JObject parameters = null)
        {
            JObject requestObject =
                   new JObject(
                       new JProperty("jsonrpc", "2.0"),
                       new JProperty("id", 234),
                       new JProperty("method", methodName));

            if (parameters != null)
                requestObject["params"] = parameters;

            return requestObject;
        }
    }
}
