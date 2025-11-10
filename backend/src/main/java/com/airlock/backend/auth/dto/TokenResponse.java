package com.airlock.backend.auth.dto;

import lombok.*;

@Data @NoArgsConstructor @AllArgsConstructor
public class TokenResponse {
    private String accessToken;
}