%% Zlib dictionary.

-define(ZDICT, <<
	16#00, 16#00, 16#00, 16#07, 16#6f, 16#70, 16#74, 16#69,
	16#6f, 16#6e, 16#73, 16#00, 16#00, 16#00, 16#04, 16#68,
	16#65, 16#61, 16#64, 16#00, 16#00, 16#00, 16#04, 16#70,
	16#6f, 16#73, 16#74, 16#00, 16#00, 16#00, 16#03, 16#70,
	16#75, 16#74, 16#00, 16#00, 16#00, 16#06, 16#64, 16#65,
	16#6c, 16#65, 16#74, 16#65, 16#00, 16#00, 16#00, 16#05,
	16#74, 16#72, 16#61, 16#63, 16#65, 16#00, 16#00, 16#00,
	16#06, 16#61, 16#63, 16#63, 16#65, 16#70, 16#74, 16#00,
	16#00, 16#00, 16#0e, 16#61, 16#63, 16#63, 16#65, 16#70,
	16#74, 16#2d, 16#63, 16#68, 16#61, 16#72, 16#73, 16#65,
	16#74, 16#00, 16#00, 16#00, 16#0f, 16#61, 16#63, 16#63,
	16#65, 16#70, 16#74, 16#2d, 16#65, 16#6e, 16#63, 16#6f,
	16#64, 16#69, 16#6e, 16#67, 16#00, 16#00, 16#00, 16#0f,
	16#61, 16#63, 16#63, 16#65, 16#70, 16#74, 16#2d, 16#6c,
	16#61, 16#6e, 16#67, 16#75, 16#61, 16#67, 16#65, 16#00,
	16#00, 16#00, 16#0d, 16#61, 16#63, 16#63, 16#65, 16#70,
	16#74, 16#2d, 16#72, 16#61, 16#6e, 16#67, 16#65, 16#73,
	16#00, 16#00, 16#00, 16#03, 16#61, 16#67, 16#65, 16#00,
	16#00, 16#00, 16#05, 16#61, 16#6c, 16#6c, 16#6f, 16#77,
	16#00, 16#00, 16#00, 16#0d, 16#61, 16#75, 16#74, 16#68,
	16#6f, 16#72, 16#69, 16#7a, 16#61, 16#74, 16#69, 16#6f,
	16#6e, 16#00, 16#00, 16#00, 16#0d, 16#63, 16#61, 16#63,
	16#68, 16#65, 16#2d, 16#63, 16#6f, 16#6e, 16#74, 16#72,
	16#6f, 16#6c, 16#00, 16#00, 16#00, 16#0a, 16#63, 16#6f,
	16#6e, 16#6e, 16#65, 16#63, 16#74, 16#69, 16#6f, 16#6e,
	16#00, 16#00, 16#00, 16#0c, 16#63, 16#6f, 16#6e, 16#74,
	16#65, 16#6e, 16#74, 16#2d, 16#62, 16#61, 16#73, 16#65,
	16#00, 16#00, 16#00, 16#10, 16#63, 16#6f, 16#6e, 16#74,
	16#65, 16#6e, 16#74, 16#2d, 16#65, 16#6e, 16#63, 16#6f,
	16#64, 16#69, 16#6e, 16#67, 16#00, 16#00, 16#00, 16#10,
	16#63, 16#6f, 16#6e, 16#74, 16#65, 16#6e, 16#74, 16#2d,
	16#6c, 16#61, 16#6e, 16#67, 16#75, 16#61, 16#67, 16#65,
	16#00, 16#00, 16#00, 16#0e, 16#63, 16#6f, 16#6e, 16#74,
	16#65, 16#6e, 16#74, 16#2d, 16#6c, 16#65, 16#6e, 16#67,
	16#74, 16#68, 16#00, 16#00, 16#00, 16#10, 16#63, 16#6f,
	16#6e, 16#74, 16#65, 16#6e, 16#74, 16#2d, 16#6c, 16#6f,
	16#63, 16#61, 16#74, 16#69, 16#6f, 16#6e, 16#00, 16#00,
	16#00, 16#0b, 16#63, 16#6f, 16#6e, 16#74, 16#65, 16#6e,
	16#74, 16#2d, 16#6d, 16#64, 16#35, 16#00, 16#00, 16#00,
	16#0d, 16#63, 16#6f, 16#6e, 16#74, 16#65, 16#6e, 16#74,
	16#2d, 16#72, 16#61, 16#6e, 16#67, 16#65, 16#00, 16#00,
	16#00, 16#0c, 16#63, 16#6f, 16#6e, 16#74, 16#65, 16#6e,
	16#74, 16#2d, 16#74, 16#79, 16#70, 16#65, 16#00, 16#00,
	16#00, 16#04, 16#64, 16#61, 16#74, 16#65, 16#00, 16#00,
	16#00, 16#04, 16#65, 16#74, 16#61, 16#67, 16#00, 16#00,
	16#00, 16#06, 16#65, 16#78, 16#70, 16#65, 16#63, 16#74,
	16#00, 16#00, 16#00, 16#07, 16#65, 16#78, 16#70, 16#69,
	16#72, 16#65, 16#73, 16#00, 16#00, 16#00, 16#04, 16#66,
	16#72, 16#6f, 16#6d, 16#00, 16#00, 16#00, 16#04, 16#68,
	16#6f, 16#73, 16#74, 16#00, 16#00, 16#00, 16#08, 16#69,
	16#66, 16#2d, 16#6d, 16#61, 16#74, 16#63, 16#68, 16#00,
	16#00, 16#00, 16#11, 16#69, 16#66, 16#2d, 16#6d, 16#6f,
	16#64, 16#69, 16#66, 16#69, 16#65, 16#64, 16#2d, 16#73,
	16#69, 16#6e, 16#63, 16#65, 16#00, 16#00, 16#00, 16#0d,
	16#69, 16#66, 16#2d, 16#6e, 16#6f, 16#6e, 16#65, 16#2d,
	16#6d, 16#61, 16#74, 16#63, 16#68, 16#00, 16#00, 16#00,
	16#08, 16#69, 16#66, 16#2d, 16#72, 16#61, 16#6e, 16#67,
	16#65, 16#00, 16#00, 16#00, 16#13, 16#69, 16#66, 16#2d,
	16#75, 16#6e, 16#6d, 16#6f, 16#64, 16#69, 16#66, 16#69,
	16#65, 16#64, 16#2d, 16#73, 16#69, 16#6e, 16#63, 16#65,
	16#00, 16#00, 16#00, 16#0d, 16#6c, 16#61, 16#73, 16#74,
	16#2d, 16#6d, 16#6f, 16#64, 16#69, 16#66, 16#69, 16#65,
	16#64, 16#00, 16#00, 16#00, 16#08, 16#6c, 16#6f, 16#63,
	16#61, 16#74, 16#69, 16#6f, 16#6e, 16#00, 16#00, 16#00,
	16#0c, 16#6d, 16#61, 16#78, 16#2d, 16#66, 16#6f, 16#72,
	16#77, 16#61, 16#72, 16#64, 16#73, 16#00, 16#00, 16#00,
	16#06, 16#70, 16#72, 16#61, 16#67, 16#6d, 16#61, 16#00,
	16#00, 16#00, 16#12, 16#70, 16#72, 16#6f, 16#78, 16#79,
	16#2d, 16#61, 16#75, 16#74, 16#68, 16#65, 16#6e, 16#74,
	16#69, 16#63, 16#61, 16#74, 16#65, 16#00, 16#00, 16#00,
	16#13, 16#70, 16#72, 16#6f, 16#78, 16#79, 16#2d, 16#61,
	16#75, 16#74, 16#68, 16#6f, 16#72, 16#69, 16#7a, 16#61,
	16#74, 16#69, 16#6f, 16#6e, 16#00, 16#00, 16#00, 16#05,
	16#72, 16#61, 16#6e, 16#67, 16#65, 16#00, 16#00, 16#00,
	16#07, 16#72, 16#65, 16#66, 16#65, 16#72, 16#65, 16#72,
	16#00, 16#00, 16#00, 16#0b, 16#72, 16#65, 16#74, 16#72,
	16#79, 16#2d, 16#61, 16#66, 16#74, 16#65, 16#72, 16#00,
	16#00, 16#00, 16#06, 16#73, 16#65, 16#72, 16#76, 16#65,
	16#72, 16#00, 16#00, 16#00, 16#02, 16#74, 16#65, 16#00,
	16#00, 16#00, 16#07, 16#74, 16#72, 16#61, 16#69, 16#6c,
	16#65, 16#72, 16#00, 16#00, 16#00, 16#11, 16#74, 16#72,
	16#61, 16#6e, 16#73, 16#66, 16#65, 16#72, 16#2d, 16#65,
	16#6e, 16#63, 16#6f, 16#64, 16#69, 16#6e, 16#67, 16#00,
	16#00, 16#00, 16#07, 16#75, 16#70, 16#67, 16#72, 16#61,
	16#64, 16#65, 16#00, 16#00, 16#00, 16#0a, 16#75, 16#73,
	16#65, 16#72, 16#2d, 16#61, 16#67, 16#65, 16#6e, 16#74,
	16#00, 16#00, 16#00, 16#04, 16#76, 16#61, 16#72, 16#79,
	16#00, 16#00, 16#00, 16#03, 16#76, 16#69, 16#61, 16#00,
	16#00, 16#00, 16#07, 16#77, 16#61, 16#72, 16#6e, 16#69,
	16#6e, 16#67, 16#00, 16#00, 16#00, 16#10, 16#77, 16#77,
	16#77, 16#2d, 16#61, 16#75, 16#74, 16#68, 16#65, 16#6e,
	16#74, 16#69, 16#63, 16#61, 16#74, 16#65, 16#00, 16#00,
	16#00, 16#06, 16#6d, 16#65, 16#74, 16#68, 16#6f, 16#64,
	16#00, 16#00, 16#00, 16#03, 16#67, 16#65, 16#74, 16#00,
	16#00, 16#00, 16#06, 16#73, 16#74, 16#61, 16#74, 16#75,
	16#73, 16#00, 16#00, 16#00, 16#06, 16#32, 16#30, 16#30,
	16#20, 16#4f, 16#4b, 16#00, 16#00, 16#00, 16#07, 16#76,
	16#65, 16#72, 16#73, 16#69, 16#6f, 16#6e, 16#00, 16#00,
	16#00, 16#08, 16#48, 16#54, 16#54, 16#50, 16#2f, 16#31,
	16#2e, 16#31, 16#00, 16#00, 16#00, 16#03, 16#75, 16#72,
	16#6c, 16#00, 16#00, 16#00, 16#06, 16#70, 16#75, 16#62,
	16#6c, 16#69, 16#63, 16#00, 16#00, 16#00, 16#0a, 16#73,
	16#65, 16#74, 16#2d, 16#63, 16#6f, 16#6f, 16#6b, 16#69,
	16#65, 16#00, 16#00, 16#00, 16#0a, 16#6b, 16#65, 16#65,
	16#70, 16#2d, 16#61, 16#6c, 16#69, 16#76, 16#65, 16#00,
	16#00, 16#00, 16#06, 16#6f, 16#72, 16#69, 16#67, 16#69,
	16#6e, 16#31, 16#30, 16#30, 16#31, 16#30, 16#31, 16#32,
	16#30, 16#31, 16#32, 16#30, 16#32, 16#32, 16#30, 16#35,
	16#32, 16#30, 16#36, 16#33, 16#30, 16#30, 16#33, 16#30,
	16#32, 16#33, 16#30, 16#33, 16#33, 16#30, 16#34, 16#33,
	16#30, 16#35, 16#33, 16#30, 16#36, 16#33, 16#30, 16#37,
	16#34, 16#30, 16#32, 16#34, 16#30, 16#35, 16#34, 16#30,
	16#36, 16#34, 16#30, 16#37, 16#34, 16#30, 16#38, 16#34,
	16#30, 16#39, 16#34, 16#31, 16#30, 16#34, 16#31, 16#31,
	16#34, 16#31, 16#32, 16#34, 16#31, 16#33, 16#34, 16#31,
	16#34, 16#34, 16#31, 16#35, 16#34, 16#31, 16#36, 16#34,
	16#31, 16#37, 16#35, 16#30, 16#32, 16#35, 16#30, 16#34,
	16#35, 16#30, 16#35, 16#32, 16#30, 16#33, 16#20, 16#4e,
	16#6f, 16#6e, 16#2d, 16#41, 16#75, 16#74, 16#68, 16#6f,
	16#72, 16#69, 16#74, 16#61, 16#74, 16#69, 16#76, 16#65,
	16#20, 16#49, 16#6e, 16#66, 16#6f, 16#72, 16#6d, 16#61,
	16#74, 16#69, 16#6f, 16#6e, 16#32, 16#30, 16#34, 16#20,
	16#4e, 16#6f, 16#20, 16#43, 16#6f, 16#6e, 16#74, 16#65,
	16#6e, 16#74, 16#33, 16#30, 16#31, 16#20, 16#4d, 16#6f,
	16#76, 16#65, 16#64, 16#20, 16#50, 16#65, 16#72, 16#6d,
	16#61, 16#6e, 16#65, 16#6e, 16#74, 16#6c, 16#79, 16#34,
	16#30, 16#30, 16#20, 16#42, 16#61, 16#64, 16#20, 16#52,
	16#65, 16#71, 16#75, 16#65, 16#73, 16#74, 16#34, 16#30,
	16#31, 16#20, 16#55, 16#6e, 16#61, 16#75, 16#74, 16#68,
	16#6f, 16#72, 16#69, 16#7a, 16#65, 16#64, 16#34, 16#30,
	16#33, 16#20, 16#46, 16#6f, 16#72, 16#62, 16#69, 16#64,
	16#64, 16#65, 16#6e, 16#34, 16#30, 16#34, 16#20, 16#4e,
	16#6f, 16#74, 16#20, 16#46, 16#6f, 16#75, 16#6e, 16#64,
	16#35, 16#30, 16#30, 16#20, 16#49, 16#6e, 16#74, 16#65,
	16#72, 16#6e, 16#61, 16#6c, 16#20, 16#53, 16#65, 16#72,
	16#76, 16#65, 16#72, 16#20, 16#45, 16#72, 16#72, 16#6f,
	16#72, 16#35, 16#30, 16#31, 16#20, 16#4e, 16#6f, 16#74,
	16#20, 16#49, 16#6d, 16#70, 16#6c, 16#65, 16#6d, 16#65,
	16#6e, 16#74, 16#65, 16#64, 16#35, 16#30, 16#33, 16#20,
	16#53, 16#65, 16#72, 16#76, 16#69, 16#63, 16#65, 16#20,
	16#55, 16#6e, 16#61, 16#76, 16#61, 16#69, 16#6c, 16#61,
	16#62, 16#6c, 16#65, 16#4a, 16#61, 16#6e, 16#20, 16#46,
	16#65, 16#62, 16#20, 16#4d, 16#61, 16#72, 16#20, 16#41,
	16#70, 16#72, 16#20, 16#4d, 16#61, 16#79, 16#20, 16#4a,
	16#75, 16#6e, 16#20, 16#4a, 16#75, 16#6c, 16#20, 16#41,
	16#75, 16#67, 16#20, 16#53, 16#65, 16#70, 16#74, 16#20,
	16#4f, 16#63, 16#74, 16#20, 16#4e, 16#6f, 16#76, 16#20,
	16#44, 16#65, 16#63, 16#20, 16#30, 16#30, 16#3a, 16#30,
	16#30, 16#3a, 16#30, 16#30, 16#20, 16#4d, 16#6f, 16#6e,
	16#2c, 16#20, 16#54, 16#75, 16#65, 16#2c, 16#20, 16#57,
	16#65, 16#64, 16#2c, 16#20, 16#54, 16#68, 16#75, 16#2c,
	16#20, 16#46, 16#72, 16#69, 16#2c, 16#20, 16#53, 16#61,
	16#74, 16#2c, 16#20, 16#53, 16#75, 16#6e, 16#2c, 16#20,
	16#47, 16#4d, 16#54, 16#63, 16#68, 16#75, 16#6e, 16#6b,
	16#65, 16#64, 16#2c, 16#74, 16#65, 16#78, 16#74, 16#2f,
	16#68, 16#74, 16#6d, 16#6c, 16#2c, 16#69, 16#6d, 16#61,
	16#67, 16#65, 16#2f, 16#70, 16#6e, 16#67, 16#2c, 16#69,
	16#6d, 16#61, 16#67, 16#65, 16#2f, 16#6a, 16#70, 16#67,
	16#2c, 16#69, 16#6d, 16#61, 16#67, 16#65, 16#2f, 16#67,
	16#69, 16#66, 16#2c, 16#61, 16#70, 16#70, 16#6c, 16#69,
	16#63, 16#61, 16#74, 16#69, 16#6f, 16#6e, 16#2f, 16#78,
	16#6d, 16#6c, 16#2c, 16#61, 16#70, 16#70, 16#6c, 16#69,
	16#63, 16#61, 16#74, 16#69, 16#6f, 16#6e, 16#2f, 16#78,
	16#68, 16#74, 16#6d, 16#6c, 16#2b, 16#78, 16#6d, 16#6c,
	16#2c, 16#74, 16#65, 16#78, 16#74, 16#2f, 16#70, 16#6c,
	16#61, 16#69, 16#6e, 16#2c, 16#74, 16#65, 16#78, 16#74,
	16#2f, 16#6a, 16#61, 16#76, 16#61, 16#73, 16#63, 16#72,
	16#69, 16#70, 16#74, 16#2c, 16#70, 16#75, 16#62, 16#6c,
	16#69, 16#63, 16#70, 16#72, 16#69, 16#76, 16#61, 16#74,
	16#65, 16#6d, 16#61, 16#78, 16#2d, 16#61, 16#67, 16#65,
	16#3d, 16#67, 16#7a, 16#69, 16#70, 16#2c, 16#64, 16#65,
	16#66, 16#6c, 16#61, 16#74, 16#65, 16#2c, 16#73, 16#64,
	16#63, 16#68, 16#63, 16#68, 16#61, 16#72, 16#73, 16#65,
	16#74, 16#3d, 16#75, 16#74, 16#66, 16#2d, 16#38, 16#63,
	16#68, 16#61, 16#72, 16#73, 16#65, 16#74, 16#3d, 16#69,
	16#73, 16#6f, 16#2d, 16#38, 16#38, 16#35, 16#39, 16#2d,
	16#31, 16#2c, 16#75, 16#74, 16#66, 16#2d, 16#2c, 16#2a,
	16#2c, 16#65, 16#6e, 16#71, 16#3d, 16#30, 16#2e >>).
