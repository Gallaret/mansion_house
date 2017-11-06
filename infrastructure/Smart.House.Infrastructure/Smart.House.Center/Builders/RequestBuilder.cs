using System;
using System.Net.Http;
using System.Net.Http.Headers;

namespace Smart.House.Center.Builders
{
    public class RequestBuilder
    {
        public static HttpClient BuildClient(string uri)
        {
            HttpClientHandler handler = new HttpClientHandler();
            HttpClient httpClient = new HttpClient(handler);
            string uriString = "http://" + "192.168.0.10" + ":" + "8080" + "/jsonrpc?request=";
            httpClient.BaseAddress = new Uri(uriString);
           
            //HttpResponseMessage response = await httpClient.SendAsync(request);
            return httpClient;
        }

        public static HttpRequestMessage BuildMessage(string data)
        {
            var request = new HttpRequestMessage(HttpMethod.Post, string.Empty)
            {
                Content = new StringContent(data)
            };

            request.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            //if (CurrentConnection.HasCredentials())
            //    request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", Convert.ToBase64String(Encoding.UTF8.GetBytes(String.Format("{0}:{1}", CurrentConnection.Username, CurrentConnection.Password))));

            return request;
        }
    }
}
