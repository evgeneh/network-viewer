import {Host} from './Models/hosts';

export const hostList: Host[] = [
  {
    id: 1, avg_latency: 0, ip: '192.168.0.1', is_available: false,
    jitter: 0, max_latency: 0, min_latency: 0,
    per_loss: 100, updated: new Date()
  },
  {
    id: 2, avg_latency: 0, ip: '192.168.1.1', is_available: true,
    jitter: 1.1, max_latency: 2, min_latency: 0.1,
    per_loss: 0, updated: new Date()
  }
];
