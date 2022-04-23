const mongoose = require('mongoose')

// ��Ű�� ����
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        // ���� ����
        trim: true,
        // ���ϰ�
        unique: 1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        // �⺻��
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    // ��ū ��ȿ �Ⱓ
    tokenExp:{
        type: Number
    }
})

// ��Ű���� �𵨷� ���������
// �𵨸�: User
const User = mongoose.model('User', userSchema)

// �ش� ����� �ٸ� ���Ͽ����� ������� �� ����
module.exports = { User }