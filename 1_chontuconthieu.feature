Feature: Kiểm tra trắc nghiệm
	In order to kiểm tra từ vựng đã học
	As 1 người dùng
	I want to làm bài kiểm tra
	
	Scenario: chọn đáp án sai
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click vào đáp án a 
		Then Tôi nhận kết quả sai
		And Tôi nhận được đáp án đúng
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario: chọn đáp án đúng
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click vào đáp án d
		Then Tôi nhận kết quả đúng
		And điểm của tôi sẽ tăng 1 đv
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

	Scenario Outline: chọn từ còn thiếu
		Given Tôi đang truy cập kiểm tra trắc nghiệm thông minh
		When Tôi click <answer>
		Then Tôi nhận <result>
		When Tôi click Next
		Then Tôi sẽ nhìn thấy câu hỏi tiếp theo

		Examples:
		She___rice and meat
		| answer | result |
		|a. drink|    sai |
		|b. walk |    sai |
		|c. eat  |    sai |
		|d. eats |   đúng |

