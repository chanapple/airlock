package com.airlock.backend.domain.repository;

import com.airlock.backend.domain.entity.PasskeyCredential;
import com.airlock.backend.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PasskeyCredentialRepository extends JpaRepository<PasskeyCredential, Long> {
    List<PasskeyCredential> findByUser(User user);
    Optional<PasskeyCredential> findByCredentialId(String credentialId);
}
