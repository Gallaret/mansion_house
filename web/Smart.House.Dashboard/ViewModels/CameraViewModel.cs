using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Smart.House.Dashboard.ViewModels
{
    public struct CameraViewModel
    {
        public string Identifier { get; set; }
        public bool IsMotionDetected { get; set; }
    }
}
