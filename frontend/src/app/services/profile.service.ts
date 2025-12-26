import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import type {
  AvatarUploadResponse,
  ProfileSaveRequest,
} from '../models/api.models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = API_CONFIG.BASE_URL;

  constructor(private http: HttpClient) {}

  uploadAvatar(userId: string, file: File): Observable<AvatarUploadResponse> {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('file', file);

    return this.http.post<AvatarUploadResponse>(
      `${this.apiUrl}/api/profile/avatar`,
      formData
    );
  }

  saveProfile(profile: ProfileSaveRequest): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(
      `${this.apiUrl}/api/profile/save`,
      profile
    );
  }
}
