# Cấu trúc Microservice

## Thông tin dự án

* **Cấu trúc:** Microservice
* **Số Thành Viên:** 1
* **Giới thiệu dự án:** 

## Công nghệ sử dụng

* **Containerization:** Docker
* **Authentication:** Firebase (OAuth2)

## Ngôn ngữ lập trình

* **Backend:** ASP.NET 8 Core API
* **Frontend:** React

## Hướng dẫn cài đặt và chạy



### Yêu cầu tiên quyết

* [Docker](https://www.docker.com/get-started) đã được cài đặt trên hệ thống của bạn.
* [Node.js](https://nodejs.org/) (phiên bản LTS được khuyến nghị) và [npm](https://www.npmjs.com/) (hoặc [yarn](https://yarnpkg.com/)) đã được cài đặt cho phần frontend.
* [SDK .NET 8](https://dotnet.microsoft.com/download/dotnet/8.0) đã được cài đặt cho phần backend.
* Một tài khoản [Firebase](https://firebase.google.com/) và cấu hình OAuth2 đã được thiết lập.

### Các bước cài đặt

1.  **Clone repository:**

    ```bash
    git clone [URL_REPOSITORY_CỦA_BẠN]
    cd [TÊN_THƯ_MỤC_DỰ_ÁN]
    ```

2.  **Cấu hình Backend (ASP.NET 8 Core API):**

    * Di chuyển đến thư mục backend:

        ```bash
        cd Backend
        ```

    * Tạo một tệp `appsettings.Development.json` (hoặc `appsettings.json` cho môi trường production) và cấu hình thông tin Firebase của bạn (ví dụ: API Key, Auth Domain, Project ID, v.v.). Tham khảo tài liệu Firebase để biết các thông số cần thiết.

    * (Tùy chọn) Cấu hình các cài đặt khác của ứng dụng (ví dụ: chuỗi kết nối cơ sở dữ liệu nếu có).

3.  **Cấu hình Frontend (React):**

    * Di chuyển đến thư mục frontend:

        ```bash
        cd Frontend
        ```

    * Cài đặt các dependencies:

        ```bash
        npm install
        # hoặc
        yarn install
        ```

    * Tạo một tệp `.env.local` (hoặc các tệp môi trường khác) và cấu hình thông tin Firebase của bạn (ví dụ: `REACT_APP_API_KEY`, `REACT_APP_AUTH_DOMAIN`, `REACT_APP_PROJECT_ID`, v.v.). Đảm bảo sử dụng tiền tố `REACT_APP_` cho các biến môi trường của React.

4.  **Chạy ứng dụng với Docker (khuyến nghị):**

    * Quay lại thư mục gốc của dự án.
    * Xây dựng và chạy các container Docker:

        ```bash
        docker-compose up -d --build
        ```

    * (Nếu bạn chưa có tệp `docker-compose.yml`, bạn cần tạo nó để định nghĩa các service cho backend và frontend. Ví dụ cơ bản:)

        ```yaml
        version: '3.8'
        services:
          backend:
            build: ./Backend
            ports:
              - "5000:5000" # Thay đổi cổng nếu cần
            environment:
              - ASPNETCORE_ENVIRONMENT=Development # Hoặc Production
            # volumes:
            #   - ./Backend:/app

          frontend:
            build: ./Frontend
            ports:
              - "3000:3000" # Thay đổi cổng nếu cần
            environment:
              # Truyền các biến môi trường nếu cần
              # - REACT_APP_API_KEY=${REACT_APP_API_KEY}
            depends_on:
              - backend
            # volumes:
            #   - ./Frontend/src:/app/src
        ```

        Và bạn cần có các tệp `Dockerfile` tương ứng trong thư mục `Backend` và `Frontend` để build image.

5.  **Chạy ứng dụng cục bộ (không dùng Docker):**

    * **Backend:**
        * Di chuyển đến thư mục `Backend`.
        * Chạy lệnh:

            ```bash
            dotnet run
            ```

        * Ứng dụng backend thường chạy trên cổng `http://localhost:5000` (có thể khác tùy theo cấu hình).

    * **Frontend:**
        * Di chuyển đến thư mục `Frontend`.
        * Chạy lệnh:

            ```bash
            npm start
            # hoặc
            yarn start
            ```

        * Ứng dụng frontend thường chạy trên cổng `http://localhost:3000`.

## Hướng dẫn sử dụng

**(Phần này mô tả cách người dùng có thể tương tác với ứng dụng của bạn. Ví dụ: các trang chính, chức năng, quy trình đăng ký/đăng nhập, v.v.)**

