import { Injectable } from '@angular/core';
import { ClientServiceClient } from '../grpc/SittelleServiceClientServiceClientPb';
import { ChartServiceClient } from '../grpc/SittelleServiceChartServiceClientPb';
import { DictionaryClient } from '../grpc/SittelleServiceDictionaryServiceClientPb';
import { ReportClient } from "../grpc/SittelleServiceReportServiceClientPb";

@Injectable({
  providedIn: 'root'
})
export class GrpcService {
  public ClientServiceClient: ClientServiceClient;
  public ChartServiceClient: ChartServiceClient;
  public DictionaryServiceClient: DictionaryClient;
  public ReportServiceClient: ReportClient;

  // private host = 'https://10.46.35.11';
  private host = 'https://192.168.104.18';

  constructor() {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = new ClientServiceClient(this.host);
    }
    if (!this.ChartServiceClient) {
      this.ChartServiceClient = new ChartServiceClient(this.host);
    }
    if (!this.DictionaryServiceClient) {
      this.DictionaryServiceClient = new DictionaryClient(this.host);
    }
    if (!this.ReportServiceClient) {
      this.ReportServiceClient = new ReportClient(this.host);
    }
  }
}
