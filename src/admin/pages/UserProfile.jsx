import React, { useState, useEffect } from "react";
import MasterLayout from "../components/layout/MasterLayout";
import { getAllUser, updateUser } from "../../api";
import { notifyuser } from "../../utils";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    user_id: "",  
    name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    profile_picture: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const result = await getAllUser();
      if (result?.status === 200 && Array.isArray(result.data) && result.data.length > 0) {
        const user = result.data[0];
        console.log("user",user);
        
        setUserData({
          user_id: user.user_id,      
          name: user.name,
          last_name: user.last_name,
          email: user.email,
          mobile_number: user.mobile_number,
          profile_picture: user.profile_picture,
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const togglePassword = (el) => {
    const input = el.previousSibling;
    input.type = input.type === "password" ? "text" : "password";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.user_id) {
        alert("User ID is missing!");
        return;
    }

    // prepare payload
    const payload = {
        user_id: userData.user_id, 
        name: userData.name,
        last_name: userData.last_name,
        email: userData.email,
        mobile_number: userData.mobile_number,
    };

    console.log("Payload to send:", payload);

    try {
        const result = await updateUser(userData.user_id, payload);

        if (result?.status === 200) {
        alert("User updated successfully!");
          // notifyuser("success", "User updated successfully!");
        fetchUsers(); 
        } else {
        alert("Failed to update user.");
        }
    } catch (error) {
        console.error("Error updating user:", error);
        alert("Something went wrong!");
    }
    };


  return (
    <MasterLayout>
      <div className="px-5 py-4">
        <h1 className="fs-5 fw-600 lh-1">Profile</h1>
      </div>

      <div className="px-5 mb-5">
        <div className="columns is-multiline">
          {/* Edit Profile Form */}
          <div className="column is-12-mobile is-8-desktop">
            <div className="card h-100">
              <div className="card-header px-5 py-3">
                <h4>Edit Profile</h4>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="columns is-multiline">
                    {/* Name */}
                    <div className="column is-6">
                      <label>Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                    </div>

                    {/* Last Name */}
                    <div className="column is-6">
                      <label>Last Name*</label>
                      <input
                        type="text"
                        className="form-control"
                        value={userData.last_name}
                        onChange={(e) =>
                          setUserData({ ...userData, last_name: e.target.value })
                        }
                      />
                    </div>

                    {/* Email */}
                    <div className="column is-6">
                      <label>Email*</label>
                      <input
                        type="email"
                        className="form-control"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value.toLowerCase() })
                        }
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="column is-6">
                      <label>Mobile Number*</label>
                      <input
                        type="tel"
                        className="form-control"
                        minLength="10"
                        maxLength="10"
                        value={userData.mobile_number}
                        onChange={(e) =>
                          setUserData({ ...userData, mobile_number: e.target.value })
                        }
                      />
                    </div>

                    {/* Hidden user_id */}
                    <input type="hidden" value={userData.id} />

                    {/* Submit */}
                    <div className="column is-12">
                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="column is-4-desktop">
            <div className="card h-100">
              <div className="card-header px-5 py-3">
                <h4>Change Password</h4>
              </div>
              <div className="card-body p-5">
                <form id="change-password" noValidate>
                  <div class="columns is-multiline">
              <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen col-form">
              <div class="form-group">
                <label class="form-label">New Password*</label>
                <div class="input-group">
                    <input type="password" class="form-control password-field" name="password" id="password" required/>
                    <span class="input-group-text" onclick="togglePassword(this)">
                        <svg class="icon icon-tabler-eye-off toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                      </svg>
                    </span>
                </div>
                <div className="setpassword-feedback" style={{ fontSize: "0.9rem" }}></div>
            </div>
              </div>
              <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen col-form">
                <div class="form-group">
                  <label class="form-label">Confirm Password*</label>
                  <div class="input-group">
                    <input type="password" class="form-control password-field" name="confirm_password" id="confirm_password" required/>
                    <span class="input-group-text" onclick="togglePassword(this)">
                      <svg class="icon icon-tabler-eye-off toggle-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
                        <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
                        <path d="M3 3l18 18" />
                      </svg>
                    </span>
                  </div>
                  <div className="confirmpassword-feedback" style={{ fontSize: "0.9rem" }}></div>

                </div>
              </div>
              <div class="column is-12-mobile is-12-tablet is-12-desktop is-12-widescreen col-form">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default UserProfile;
