package com.example.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class PersonOutputDTO {
    private Long id;
    private Date creationDate;
    private Date lastModifiedDate;
    private Long version;
    private Long personId;
    private LocationDTO startLocation;
    private LocationDTO endLocation;
    private boolean hasWheelchair;
}