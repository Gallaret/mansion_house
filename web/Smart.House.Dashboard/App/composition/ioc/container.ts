import { Container } from "inversify";
import { CameraService } from '../../composition/components/devices/camera/services/camera';
import { TelevisionService } from '../../composition/components/devices/television/services/television';
import { Services } from '../../composition/services/types'
import { CameraActionService } from "../../composition/services/camera";
import { TelevisionActionService } from "../../composition/services/television";

export const container = new Container();

container.bind<CameraService>(Services.CameraService).to(CameraActionService);
container.bind<TelevisionService>(Services.TelevisionService).to(TelevisionActionService);
