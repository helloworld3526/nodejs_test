const mongoose = require('mongoose')

// 스키마 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        // 공백 제거
        trim: true,
        // 유일값
        unique: 1
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        // 기본값
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    // 토큰 유효 기간
    tokenExp:{
        type: Number
    }
})

// 스키마를 모델로 감싸줘야함
// 모델명: User
const User = mongoose.model('User', userSchema)

// 해당 모듈을 다른 파일에서도 쓰고싶을 때 지정
module.exports = { User }