module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "plugin:react/recommended",
        "eslint:recommended",
        "google"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // 들여쓰기 2칸만 허용
        "indent": ["error", 4],
        // var 키워드 사용 불가능
        "no-var": "error",
        // async 함수 내부에 await 키워드가 없으면 오류 발생
        "require-await": "error",
        // ==, != 대신에 ===, !== 사용
        "eqeqeq": "error"
    }
}