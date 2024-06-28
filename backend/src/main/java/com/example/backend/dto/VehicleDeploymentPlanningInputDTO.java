package com.example.backend.dto;

import java.util.Set;

public record VehicleDeploymentPlanningInputDTO (String name, Set<PersonInputDTO> persons,
                                                 Set<VehicleInputDTO> vehicles, Set<AddressInputDTO> addresses) {
}
