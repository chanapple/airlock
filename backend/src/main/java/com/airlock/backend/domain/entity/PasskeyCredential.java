package com.airlock.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Entity
@Table(name = "passkey_credentials")
public class PasskeyCredential {

    @Getter @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter @Setter
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Getter @Setter
    @Column(nullable = false, unique = true, length = 200)
    private String credentialId;

    @Getter @Setter @Lob
    @Column(name = "public_key", nullable = false)
    private String publicKey;

    @Getter @Setter
    @Column(nullable = false)
    private long signCount = 0L;

    @Getter
    @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    @Getter @Setter
    private Instant lastUsedAt;

    public PasskeyCredential() {}

    public PasskeyCredential(User user, String credentialId, String publicKey, long signCount) {
        this.user = user;
        this.credentialId = credentialId;
        this.publicKey = publicKey;
        this.signCount = signCount;
    }
}
