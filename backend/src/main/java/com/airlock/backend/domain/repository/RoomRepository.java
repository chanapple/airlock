package com.airlock.backend.domain.repository;

import com.airlock.backend.domain.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {

}