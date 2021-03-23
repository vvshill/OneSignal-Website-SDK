import { ContextSWInterface } from "../../../models/ContextSW";
import { PushDeviceRecord } from "../../../models/PushDeviceRecord";
import { SessionOrigin } from "../../../models/Session";
import { ISessionManager } from "../types";

// TODO: We should delete this as it is dead code and don't believe we will ever need this.
export class SessionManager implements ISessionManager {
  constructor(_context: ContextSWInterface) { }

  async upsertSession(
    _deviceId: string,
    _deviceRecord: PushDeviceRecord,
    _sessionOrigin: SessionOrigin
  ): Promise<void> {
    // TODO: how should it be implemented if called from inside of service worker???
  }
}
