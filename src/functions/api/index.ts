import { status } from "./status";
import { key } from "./key"

const API: any = {}
API.Check = {}
API.Check.status = status
API.Get = {}
API.Get.key = key

export { API }
