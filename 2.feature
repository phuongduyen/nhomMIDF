Feature: Học từ theo bộ
	In order to nhớ cách phát âm, nghĩa và áp dụng từ mới trong câu
	As 1 người dùng
	I want to học từ mới theo các bộ

	Scenario: học từ
		Given người dùng đang truy cập bộ từ vựng
		When người dùng click một bộ từ
		Then từ mới hiện ra
		When người dùng click loa
		Then người dùng nghe thấy cách phát âm của từ
		When người dùng click next
		Then từ mới tiếp theo hiện ra

		Examples:
		<tranh bánh mì>
		|từ mới   |           bread|
		|nghĩa    |         bánh mì|
		|cách đọc |          /bred/|
		|ví dụ    | She has a bread|