﻿using Smart.House.EntityFramework.DataModel;
using System.Linq;
using Smart.House.Camera.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Smart.House.EntityFramework.Repositories
{
    public class CameraRepository : ICameraRepository
    {
        private readonly DataContext _context;

        public CameraRepository(DataContext context)
        {
            _context = context;
        }

        public void Add(Camera.Entities.Camera camera)
        {
            _context.Devices.Add(camera);
        }

        public Camera.Entities.Camera Get(string identifier)
        {
            var camera = _context.Devices.Include(device => device.Harmonograms)
                .SingleOrDefault(c => c.Identifier == identifier);
         
            return camera as Camera.Entities.Camera;
        }
    }
}
