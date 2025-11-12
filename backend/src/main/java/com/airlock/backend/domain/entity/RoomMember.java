package com.airlock.backend.domain.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.Instant;

@Entity @Table(name = "room_members")
public class RoomMember {
    @Getter @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @Getter
    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @Getter @Column(nullable = false, updatable = false)
    private Instant joinedAt = Instant.now();

    //방 나가기 누르면 저장
    @Getter @Setter
    private Instant leftAt;

    protected RoomMember() {}

    public RoomMember(Room room, User user) {
        this.room = room;
        this.user = user;
    }
}
