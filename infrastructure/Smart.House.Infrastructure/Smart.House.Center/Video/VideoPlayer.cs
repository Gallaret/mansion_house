using Newtonsoft.Json.Linq;
using Smart.House.Application.Domain.Devices.Center.Providers.Video;
using Smart.House.Center.Builders;
using System.Threading.Tasks;

namespace Smart.House.Center.Video
{
    public class VideoPlayer : IVideoPlayer
    {
        private readonly JObject _defaultPlayerOptions = new JObject(
            new JProperty("repeat", null),
            new JProperty("resume", false),
            new JProperty("shuffled", null));

        public async Task Pause()
        {
            using (var client = RequestBuilder.BuildClient(""))
            {
                JObject parameters = new JObject(new JProperty("playerid", 1));
                var request = JsonBuilder.BuildRequest("Player.PlayPause", parameters);
                var message = RequestBuilder.BuildMessage(request.ToString());

                await client.SendAsync(message);
            }
        }

        public async Task Play(int videoId) //dto to provide full data
        {
            var playerItem = new JObject(new JProperty("movieid", videoId));
            var parameters = new JObject(
                new JProperty("item", playerItem),
                new JProperty("options", _defaultPlayerOptions));

            using (var client = RequestBuilder.BuildClient(""))
            {
                var request = JsonBuilder.BuildRequest("Player.Open", parameters);
                var message = RequestBuilder.BuildMessage(request.ToString());

                await client.SendAsync(message);
            }
        }

        public async Task Stop()
        {
            using (var client = RequestBuilder.BuildClient(""))
            {
                JObject parameters = new JObject(new JProperty("playerid", 1));
                var request = JsonBuilder.BuildRequest("Player.Stop", parameters);
                var message = RequestBuilder.BuildMessage(request.ToString());

                await client.SendAsync(message);
            }
        }
    }
}
