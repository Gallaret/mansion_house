import { container } from '../../composition/ioc/container'
import getDecorators from "inversify-inject-decorators";

export const { lazyInject } = getDecorators(container);