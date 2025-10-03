import axios from "axios";

const API_URL = "http://localhost/kohinoor-group-portal/api";


// Add configuration
export const addConfiguration = async (data) => {
  const response = await axios.post(`${API_URL}/addconfiguration`, data);
  return response.data;
};
export const getAllConfigurations = async () => {
  const response = await axios.post(`${API_URL}/getallconfiguration`);
  return response.data; // contains {status, count, data}
};
export const updateConfiguration = async (data) => {
  const response = await axios.post(`${API_URL}/updateconfiguration`, data);
  return response.data;
};
export const deleteConfiguration = async (data) => {
  const response = await axios.post(`${API_URL}/deleteconfiguration`, data);
  return response.data;
};

// Add Project
export const addProject = async (data) => {
  const response = await axios.post(`${API_URL}/addproject`, data);
  return response.data;
};
// export const getAllProjects = async () => {
//   const response = await axios.post(`${API_URL}/getallproject`);
//   return response.data; // contains {status, count, data}
// };
// api.js
export const getAllProjects = async (offset = 0, limit = 5, search = "") => {
  try {
    const response = await axios.post(`${API_URL}/getallproject`, {
      offset,
      limit,
      search,
    });

    return response.data; // { status, count, data }
  } catch (error) {
    console.error("API Error:", error);
    return { status: false, data: [], count: 0 };
  }
};

export const updateProject = async (data) => {
  const response = await axios.post(`${API_URL}/updateproject`, data);
  return response.data;
};
export const deleteProject = async (data) => {
  const response = await axios.post(`${API_URL}/deleteproject`, data);
  return response.data;
};

// Add Project
export const addLead = async (data) => {
  const response = await axios.post(`${API_URL}/addlead`, data);
  return response.data;
};
export const getAllLeads = async () => {
  const response = await axios.post(`${API_URL}/getalllead`);
  return response.data; // contains {status, count, data}
};
export const updateLead = async (data) => {
  const response = await axios.post(`${API_URL}/updatelead`, data);
  return response.data;
};
export const deleteLead = async (data) => {
  const response = await axios.post(`${API_URL}/deletelead`, data);
  return response.data;
};

// Add Careers
export const addCareers = async (data) => {
  const response = await axios.post(`${API_URL}/addworkwithus`, data);
  return response.data;
};

export const getAllCareers = async () => {
  const response = await axios.post(`${API_URL}/getallworkwithus`);
  return response.data; // contains {status, count, data}
};

// Add Careers
export const addReferences = async (data) => {
  const response = await axios.post(`${API_URL}/addreference`, data);
  return response.data;
};

export const getAllReferences = async () => {
  const response = await axios.post(`${API_URL}/listReferences`);
  return response.data; // contains {status, count, data}
};

// Add Opportunity
export const addOpportunity = async (data) => {
  const response = await axios.post(`${API_URL}/addpatnership`, data);
  return response.data;
};

export const getAllOpportunity = async () => {
  const response = await axios.post(`${API_URL}/getallpatnership`);
  return response.data; // contains {status, count, data}
};

// Add Pincode

// export const getAllPincode = async () => {
//   const response = await axios.post(`${API_URL}/getallpincode`);
//   return response.data; // contains {status, count, data}
// };

export const getAllPincode = async (offset = 0, limit = 5, search = "") => {
  try {
    const response = await axios.post(`${API_URL}/getallpincode`, {
      offset,
      limit,
      search,
    });

    return response.data; // { status, count, data }
  } catch (error) {
    console.error("API Error:", error);
    return { status: false, data: [], count: 0 };
  }
};

// Add Project
export const addUser = async (data) => {
  const response = await axios.post(`${API_URL}/adduser`, data);
  return response.data;
};
export const getAllUser = async () => {
  const response = await axios.post(`${API_URL}/listuser`);
  return response.data; // contains {status, count, data}
};
export const updateUser = async (data) => {
  const response = await axios.post(`${API_URL}/updateuser`, data);
  return response.data;
};
export const deleteUser = async (data) => {
  const response = await axios.post(`${API_URL}/deleteuser`, data);
  return response.data;
};

// Add Amenity Categoryt
export const addAmenityCategory = async (data) => {
  const response = await axios.post(`${API_URL}/addamenitiescategory`, data);
  return response.data;
};
// export const getAllAmenityCategory = async () => {
//   const response = await axios.post(`${API_URL}/getallamenitiescategory`);
//   return response.data; // contains {status, count, data}
// };
export const getAllAmenityCategory = async (offset = 0, limit = 5, search = "") => {
  try {
    const response = await axios.post(`${API_URL}/getallamenitiescategory`, {
      offset,
      limit,
      search,
    });

    return response.data; // { status, count, data }
  } catch (error) {
    console.error("API Error:", error);
    return { status: false, data: [], count: 0 };
  }
};

export const updateAmenityCategory = async (data) => {
  const response = await axios.post(`${API_URL}/updateamenitiescategory`, data);
  return response.data;
};
export const deleteAmenityCategory = async (data) => {
  const response = await axios.post(`${API_URL}/deleteamenitiescategory`, data);
  return response.data;
};

// Add Amenity 
export const addAmenity = async (data) => {
  const response = await axios.post(`${API_URL}/addamenities`, data);
  return response.data;
};
export const getAllAmenity = async () => {
  const response = await axios.post(`${API_URL}/getallamenities`);
  return response.data; // contains {status, count, data}
};
export const updateAmenity = async (data) => {
  const response = await axios.post(`${API_URL}/updateamenities`, data);
  return response.data;
};
export const deleteAmenity = async (data) => {
  const response = await axios.post(`${API_URL}/deleteamenities`, data);
  return response.data;
};


// Add Budget
export const addBudget = async (data) => {
  const response = await axios.post(`${API_URL}/addbudget`, data);
  return response.data;
};
// export const getAllBudget = async () => {
//   const response = await axios.post(`${API_URL}/getallbudget`);
//   return response.data; // contains {status, count, data}
// };
export const getAllBudget = async (offset = 0, limit = 5, search = "") => {
  try {
    const response = await axios.post(`${API_URL}/getallbudget`, {
      offset,
      limit,
      search,
    });

    return response.data; // { status, count, data }
  } catch (error) {
    console.error("API Error:", error);
    return { status: false, data: [], count: 0 };
  }
};

export const updateBudget = async (data) => {
  const response = await axios.post(`${API_URL}/updatebudget`, data);
  return response.data;
};
export const deleteBudget = async (data) => {
  const response = await axios.post(`${API_URL}/deletebudget`, data);
  return response.data;
};

// Add Construction Satus
export const addConstructionStatus = async (data) => {
  const response = await axios.post(`${API_URL}/addconstructionstatus`, data);
  return response.data;
};
export const getAllConstructionStatus = async () => {
  const response = await axios.post(`${API_URL}/getallconstructionstatus`);
  return response.data; // contains {status, count, data}
};
export const updateConstructionStatus = async (data) => {
  const response = await axios.post(`${API_URL}/updateconstructionstatus`, data);
  return response.data;
};
export const deleteConstructionStatus = async (data) => {
  const response = await axios.post(`${API_URL}/deleteconstructionstatus`, data);
  return response.data;
};

// Add Configuration Type
export const addConfigurationType = async (data) => {
  const response = await axios.post(`${API_URL}/addconfigurationtype`, data);
  return response.data;
};
export const getAllConfigurationType = async () => {
  const response = await axios.post(`${API_URL}/getallconfigurationtype`);
  return response.data; // contains {status, count, data}
};
export const updateConfigurationType = async (data) => {
  const response = await axios.post(`${API_URL}/updateconfigurationtype`, data);
  return response.data;
};
export const deleteConfigurationType = async (data) => {
  const response = await axios.post(`${API_URL}/deleteconfigurationtype`, data);
  return response.data;
};

// Add EngagementType
export const addEngagementType = async (data) => {
  const response = await axios.post(`${API_URL}/addengagementtype`, data);
  return response.data;
};
export const getAllEngagementType = async () => {
  const response = await axios.post(`${API_URL}/getallengagementtype`);
  return response.data; // contains {status, count, data}
};
export const updateEngagementType = async (data) => {
  const response = await axios.post(`${API_URL}/updateengagementtype`, data);
  return response.data;
};
export const deleteEngagementType = async (data) => {
  const response = await axios.post(`${API_URL}/deleteengagementtype`, data);
  return response.data;
};

// Add Project Type
export const addProjectType = async (data) => {
  const response = await axios.post(`${API_URL}/addprojecttype`, data);
  return response.data;
};
export const getAllProjectType = async () => {
  const response = await axios.post(`${API_URL}/getallprojecttype`);
  return response.data; // contains {status, count, data}
};
export const updateProjectType = async (data) => {
  const response = await axios.post(`${API_URL}/updateprojecttype`, data);
  return response.data;
};
export const deleteProjectType = async (data) => {
  const response = await axios.post(`${API_URL}/deleteprojecttype`, data);
  return response.data;
};

// Add Project Type
export const addSize = async (data) => {
  const response = await axios.post(`${API_URL}/addsize`, data);
  return response.data;
};
export const getAllSize = async () => {
  const response = await axios.post(`${API_URL}/getallsize`);
  return response.data; // contains {status, count, data}
};
export const updateSize = async (data) => {
  const response = await axios.post(`${API_URL}/updatesize`, data);
  return response.data;
};
export const deleteSize = async (data) => {
  const response = await axios.post(`${API_URL}/deletesize`, data);
  return response.data;
};

// Add Plan Type
export const addPlanType = async (data) => {
  const response = await axios.post(`${API_URL}/addplantype`, data);
  return response.data;
};
export const getAllPlanType = async () => {
  const response = await axios.post(`${API_URL}/getallplantype`);
  return response.data; // contains {status, count, data}
};
export const updatePlanType = async (data) => {
  const response = await axios.post(`${API_URL}/updateplantype`, data);
  return response.data;
};
export const deletePlanType = async (data) => {
  const response = await axios.post(`${API_URL}/deleteplantype`, data);
  return response.data;
};

// Loaction Refrence
export const addLocationRefrence = async (data) => {
  const response = await axios.post(`${API_URL}/addlocationrefrence`, data);
  return response.data;
};
export const getAllLocationRefrence = async () => {
  const response = await axios.post(`${API_URL}/getalllocationrefrence`);
  return response.data; // contains {status, count, data}
};
export const updateLocationRefrence = async (data) => {
  const response = await axios.post(`${API_URL}/updatelocationrefrence`, data);
  return response.data;
};
export const deleteLocationRefrence = async (data) => {
  const response = await axios.post(`${API_URL}/deletelocationrefrence`, data);
  return response.data;
};

// Loaction 
export const addLocation = async (data) => {
  const response = await axios.post(`${API_URL}/addlocation`, data);
  return response.data;
};
export const getAllLocation = async () => {
  const response = await axios.post(`${API_URL}/getalllocation`);
  return response.data; // contains {status, count, data}
};
export const updateLocation = async (data) => {
  const response = await axios.post(`${API_URL}/updatelocation`, data);
  return response.data;
};
export const deleteLocation = async (data) => {
  const response = await axios.post(`${API_URL}/deletelocation`, data);
  return response.data;
};

// Menu Loaction 
export const addMenuLocation = async (data) => {
  const response = await axios.post(`${API_URL}/addmenulocation`, data);
  return response.data;
};
export const updateMenuLocation = async (data) => {
  const response = await axios.post(`${API_URL}/updatemenulocation`, data);
  return response.data;
};
export const getAllMenuLocation = async (data) => {
  const response = await axios.post(`${API_URL}/getallmenulocation`, data);
  return response.data;
};

export const deleteMenuLocation = async (data) => {
  const response = await axios.post(`${API_URL}/deletemenulocation`, data);
  return response.data;
};

// Segment 
export const addSegment = async (data) => {
  const response = await axios.post(`${API_URL}/addsegment`, data);
  return response.data;
};
export const getAllSegment = async (data) => {
  const response = await axios.post(`${API_URL}/getallsegment`, data);
  return response.data;
};
export const updateSegment = async (data) => {
  const response = await axios.post(`${API_URL}/updatesegment`, data);
  return response.data;
};
export const deleteSegment = async (data) => {
  const response = await axios.post(`${API_URL}/deletesegment`, data);
  return response.data;
};

// Segment 
export const addFAQType = async (data) => {
  const response = await axios.post(`${API_URL}/addfaqtype`, data);
  return response.data;
};
export const getAllFAQType = async (data) => {
  const response = await axios.post(`${API_URL}/getallfaqtype`, data);
  return response.data;
};
export const updateFAQType = async (data) => {
  const response = await axios.post(`${API_URL}/updatefaqtype`, data);
  return response.data;
};
export const deleteFAQType = async (data) => {
  const response = await axios.post(`${API_URL}/deletefaqtype`, data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};



export const getAllProjectTypes = async () => {
  try {
    const response = await axios.post(`${API_URL}/getallprojecttype`);
    const result = response.data;

    if (result.status === 200) {
      return JSON.parse(atob(result.data)); // decode base64
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching project types:", error);
    return [];
  }
};

export const getAllRole = async () => {
  try {
    const response = await axios.post(`${API_URL}/listrole`);
    const result = response.data;

    if (result.status === 200) {
      return result.data; // assume it's already JSON
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching roles:", error);
    return [];
  }
};

export const TotalCount = async (data) => {
  const response = await axios.post(`${API_URL}/count`, data);
  return response.data;
};


