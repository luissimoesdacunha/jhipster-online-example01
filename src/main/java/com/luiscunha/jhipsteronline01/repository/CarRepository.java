package com.luiscunha.jhipsteronline01.repository;

import com.luiscunha.jhipsteronline01.domain.Car;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Car entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
}
