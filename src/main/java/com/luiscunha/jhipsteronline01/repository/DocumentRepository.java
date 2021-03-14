package com.luiscunha.jhipsteronline01.repository;

import com.luiscunha.jhipsteronline01.domain.Document;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Document entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {
}
