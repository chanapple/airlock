package com.airlock.backend.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity @Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional=false, fetch=FetchType.LAZY)
    @JoinColumn(name="room_id")
    private Room room;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private User sender;

    @Column(nullable=false, length=2000)
    private String content;

    @Column(nullable=false, updatable=false)
    private Instant createdAt = Instant.now();

    protected Message() {}

    public Message(Room room, User sender, String content) {
        this.room = room;
        this.sender = sender;
        this.content = content;
        this.createdAt = Instant.now();
    }
}
