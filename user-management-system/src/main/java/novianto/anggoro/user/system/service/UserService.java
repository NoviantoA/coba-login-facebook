package novianto.anggoro.user.system.service;

import novianto.anggoro.user.system.model.User;
import org.springframework.stereotype.Service;

import java.util.List;


public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

    User getUserId(Long id);

    boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
