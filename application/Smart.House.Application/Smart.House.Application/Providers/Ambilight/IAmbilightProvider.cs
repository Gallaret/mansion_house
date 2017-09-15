namespace Smart.House.Application.Providers.Ambilight
{
    public interface IAmbilightProvider
    {
        string StartAlarmCommand { get; }
        string StopAlarmCommand { get; }

    }
}
