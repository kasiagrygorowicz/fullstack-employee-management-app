package com.ema.domain.entity;

import com.sun.istack.NotNull;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@NoArgsConstructor
@Getter@Setter
@EqualsAndHashCode(exclude = {"employees"})
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private String username;

    @Column
    private String password;


    @OneToMany(mappedBy = "user")
    @Fetch(FetchMode.JOIN)
    private List<Employee> employees = new ArrayList<>();

    public User(String username) {
        this.username = username;
    }
}
