using Newtonsoft.Json.Linq;

namespace Smart.House.Center.Builders
{
    public static class JsonBuilder
    {
        public static JObject BuildRequest(string methodName, JObject parameters = null)
        {
            JObject request =
                   new JObject(
                       new JProperty("jsonrpc", "2.0"),
                       new JProperty("id", 234),
                       new JProperty("method", methodName));

            if (parameters != null)
                request["params"] = parameters;

            return request;
        }
    }
}
