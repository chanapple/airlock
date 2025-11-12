package com.airlock.backend.domain.repository;

import com.airlock.backend.domain.entity.Room;
import com.airlock.backend.domain.entity.RoomMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface RoomMemberRepository extends JpaRepository<RoomMember, Long> {
    List<RoomMember> findByRoomId(Long roomId);
    Optional<RoomMember> findByRoomIdAndUserId(Long roomId, Long userId);
}
