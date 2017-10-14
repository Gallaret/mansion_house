import { Container } from "inversify";
import { CameraService } from '../../composition/components/devices/camera/services/camera';
import { Services } from '../../composition/services/types'
import { CameraActionService } from "../../composition/services/camera";

export const container = new Container();

container.bind<CameraService>(Services.CameraService).to(CameraActionService);
