package com.luiscunha.jhipsteronline01.repository;

import com.luiscunha.jhipsteronline01.domain.Authority;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
