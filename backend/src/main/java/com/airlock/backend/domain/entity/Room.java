package com.airlock.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Entity @Table(name = "rooms")
public class Room {
    @Getter @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //채팅방 이름 설정
    @Getter @Setter
    private String title;

    @Getter @Column(nullable = false, updatable = false)
    private Instant createdAt = Instant.now();

    protected Room(String title) {}

    public Room(String title, Instant createdAt) {
        this.title = title;
        this.createdAt = createdAt;
    }
}
