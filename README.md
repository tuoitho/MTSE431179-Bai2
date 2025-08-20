# CRUD Application với Express.js, Sequelize và MySQL

Đây là một ứng dụng web CRUD (Create, Read, Update, Delete) hoàn chỉnh được xây dựng bằng Node.js, Express.js, Sequelize ORM và MySQL.

## Tính năng

- ✅ Tạo người dùng mới (Create)
- ✅ Xem danh sách tất cả người dùng (Read)
- ✅ Cập nhật thông tin người dùng (Update)
- ✅ Xóa người dùng (Delete)
- ✅ Giao diện web thân thiện với Bootstrap
- ✅ Validation dữ liệu
- ✅ Responsive design

## Công nghệ sử dụng

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **View Engine**: EJS
- **Frontend**: Bootstrap 5
- **Build Tools**: Babel, Nodemon

## Cấu trúc dự án

```
baitap2/
├── src/
│   ├── config/
│   │   ├── config.json
│   │   ├── configdb.js
│   │   └── viewEngine.js
│   ├── controllers/
│   │   └── homeController.js
│   ├── models/
│   │   ├── index.js
│   │   └── user.js
│   ├── migrations/
│   │   └── [timestamp]-create-user.js
│   ├── public/
│   │   └── css/
│   │       └── style.css
│   ├── route/
│   │   └── web.js
│   ├── services/
│   │   └── CRUDService.js
│   └── views/
│       ├── homepage.ejs
│       ├── crud.ejs
│       ├── displayCRUD.ejs
│       └── editCRUD.ejs
├── .env
├── .babelrc
├── .sequelizerc
├── .gitignore
├── package.json
└── server.js
```

## Cài đặt và chạy ứng dụng

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình database
- Cập nhật thông tin database trong file `.env`:
```
PORT=8088
DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=fullstack01
```

### 3. Tạo database và chạy migration
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### 4. Chạy ứng dụng
```bash
npm start
```

### 5. Truy cập ứng dụng
Mở trình duyệt và truy cập: `http://localhost:8088`

## API Endpoints

- `GET /` - Trang chủ
- `GET /crud` - Form tạo người dùng mới
- `POST /post-crud` - Xử lý tạo người dùng
- `GET /get-crud` - Hiển thị danh sách người dùng
- `GET /edit-crud?id=:id` - Form chỉnh sửa người dùng
- `POST /put-crud` - Xử lý cập nhật người dùng
- `GET /delete-crud?id=:id` - Xóa người dùng

## Database Schema

### Bảng Users
| Cột | Kiểu dữ liệu | Mô tả |
|-----|-------------|-------|
| id | INTEGER | Primary key, Auto increment |
| firstName | STRING | Tên |
| lastName | STRING | Họ |
| email | STRING | Email |
| createdAt | DATE | Ngày tạo |
| updatedAt | DATE | Ngày cập nhật |

## Hướng dẫn sử dụng

1. **Trang chủ**: Truy cập `/` để xem trang chủ với các liên kết điều hướng
2. **Tạo người dùng**: Click "Create User" hoặc truy cập `/crud`
3. **Xem danh sách**: Click "View All Users" hoặc truy cập `/get-crud`
4. **Chỉnh sửa**: Click nút "Edit" trong danh sách người dùng
5. **Xóa**: Click nút "Delete" trong danh sách người dùng (có xác nhận)

## Scripts

- `npm start` - Chạy ứng dụng với nodemon và babel-node
- `npm run dev` - Chạy ở chế độ development

## Môi trường phát triển

- Node.js >= 18.0.0
- MySQL >= 5.7
- npm >= 8.0.0

## Tác giả

Ứng dụng được phát triển để học tập và thực hành CRUD operations với Express.js và Sequelize.
