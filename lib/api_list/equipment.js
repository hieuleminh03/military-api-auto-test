import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin equipment endpoints
async function get_all_equipment_types(token) {
    const res = await get(endpoints.getAllEquipmentTypes, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all equipment types failed");
    }
    console.log("✅ Get all equipment types successful");
    return res.data.data;
}

async function create_equipment_type(token, name, description) {
    let body = {
        name: name,
        description: description
    };
    const res = await post(endpoints.createEquipmentType, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create equipment type failed");
    }
    console.log("✅ Create equipment type successful");
    return res.data.data;
}

async function update_equipment_type(token, id, name, description) {
    let body = {
        name: name,
        description: description
    };
    const res = await put(endpoints.updateEquipmentType.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update equipment type failed");
    }
    console.log("✅ Update equipment type successful");
    return res.data.data;
}

async function delete_equipment_type(token, id) {
    const res = await del(endpoints.deleteEquipmentType.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete equipment type failed");
    }
    console.log("✅ Delete equipment type successful");
    return res.data.data;
}

async function get_distributions(token) {
    const res = await get(endpoints.getDistributions, token);
    if (!is_success(res)) {
        throw new Error("❌ Get distributions failed");
    }
    console.log("✅ Get distributions successful");
    return res.data.data;
}

async function create_distribution(token, equipment_type_id, academic_year, quantity) {
    let body = {
        equipment_type_id: equipment_type_id,
        academic_year: academic_year,
        quantity: quantity
    };
    const res = await post(endpoints.createDistribution, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create distribution failed");
    }
    console.log("✅ Create distribution successful");
    return res.data.data;
}

async function update_distribution(token, id, equipment_type_id, academic_year, quantity) {
    let body = {
        equipment_type_id: equipment_type_id,
        academic_year: academic_year,
        quantity: quantity
    };
    const res = await put(endpoints.updateDistribution.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update distribution failed");
    }
    console.log("✅ Update distribution successful");
    return res.data.data;
}

async function delete_distribution(token, id) {
    const res = await del(endpoints.deleteDistribution.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete distribution failed");
    }
    console.log("✅ Delete distribution successful");
    return res.data.data;
}

async function create_receipts(token, equipment_type_id, student_ids, status, date_issued) {
    let body = {
        equipment_type_id: equipment_type_id,
        student_ids: student_ids,
        status: status,
        date_issued: date_issued
    };
    const res = await post(endpoints.createReceipts, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create receipts failed");
    }
    console.log("✅ Create receipts successful");
    return res.data.data;
}

async function get_students_with_pending_equipment(token) {
    const res = await get(endpoints.getStudentsWithPendingEquipment, token);
    if (!is_success(res)) {
        throw new Error("❌ Get students with pending equipment failed");
    }
    console.log("✅ Get students with pending equipment successful");
    return res.data.data;
}

async function get_student_equipment(token, student_id) {
    const res = await get(endpoints.getStudentEquipment.replace(':studentId', student_id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get student equipment failed");
    }
    console.log("✅ Get student equipment successful");
    return res.data.data;
}

// Student equipment endpoints
async function student_get_my_equipment(token) {
    const res = await get(endpoints.getStudentMyEquipment, token);
    if (!is_success(res)) {
        throw new Error("❌ Student get my equipment failed");
    }
    console.log("✅ Student get my equipment successful");
    return res.data.data;
}

async function update_student_receipt_status(token, receipt_id, status) {
    let body = {
        status: status
    };
    const res = await put(endpoints.updateStudentReceiptStatus.replace(':receiptId', receipt_id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update student receipt status failed");
    }
    console.log("✅ Update student receipt status successful");
    return res.data.data;
}

const equipment = {
    // Admin equipment APIs
    get_all_equipment_types,
    create_equipment_type,
    update_equipment_type,
    delete_equipment_type,
    get_distributions,
    create_distribution,
    update_distribution,
    delete_distribution,
    create_receipts,
    get_students_with_pending_equipment,
    get_student_equipment,
    
    // Student equipment APIs
    student_get_my_equipment,
    update_student_receipt_status
};

export default equipment;
