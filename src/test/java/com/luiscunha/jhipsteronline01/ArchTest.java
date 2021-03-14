package com.luiscunha.jhipsteronline01;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("com.luiscunha.jhipsteronline01");

        noClasses()
            .that()
            .resideInAnyPackage("com.luiscunha.jhipsteronline01.service..")
            .or()
            .resideInAnyPackage("com.luiscunha.jhipsteronline01.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..com.luiscunha.jhipsteronline01.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
