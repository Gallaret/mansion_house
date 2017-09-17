﻿using Smart.House.Application.Providers.Camera;
using Smart.House.Application.Repositories;
using Smart.House.Interface.Services.States;
using Smart.House.Domain.Devices.Entities;
using Smart.House.Interface.Services;
using System.Threading.Tasks;

namespace Smart.House.Services.State
{
    using DomainService = Domain.Devices.Services.CameraService;

    public class CameraService : IStateService<CameraState>
    {
        private readonly DomainService _service = new DomainService();

        private readonly ICameraRepository _cameraRepository;
        private readonly ICameraProviderFactory _cameraProviderFactory;

        public CameraService(ICameraRepository cameraRepository,
            ICameraProviderFactory cameraProviderFactory)
        {          
            _cameraRepository = cameraRepository;
            _cameraProviderFactory = cameraProviderFactory;
        }

        public async Task<CameraState> GetNewState(CameraState state)
        {        
            var camera = await _cameraRepository.GetAsync(state.Identifier);

            CheckMotionState(camera, state.CurrentMotionFileName);

            var newState = new CameraState(state);
            UpdateMotionState(newState, camera);

            return await Task.FromResult(newState);
        }

        private void CheckMotionState(Camera camera, string currentFileName)
        {
            if (!camera.MotionDetectionEnabled) return;

            camera.SetCurrentMotionFileName(currentFileName);

            DetectMotion(camera);

            if (camera.IsMotionDetected)
            {
                _service.SendMotionDetectedNotification(camera);
            }
        }

        private void UpdateMotionState(CameraState newState, Camera camera)
        {
            if (!camera.IsMotionDetected) return;

            newState.IsMotionDetected = true;
            newState.CurrentMotionFileName = camera.GetCurrentMotionFileName();
        }

        private void DetectMotion(Camera camera)
        {
            var provider = _cameraProviderFactory.Create(camera.Provider);
            var result = provider.DetectMotion(camera, out string currentFileName);

            camera.SetMotionDetection(result);
            camera.SetCurrentMotionFileName(currentFileName);
        }
    }
}