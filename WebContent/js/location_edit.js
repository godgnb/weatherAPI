$(document).ready(function() {
	buttonEvent();
	
//	setGrid();
	getWeatherInfo();
});

function buttonEvent() {
	
}

function setGrid() {
	const Grid = new tui.Grid;
	let el = $('#currentGrid');
	const currentGrid = new Grid({
		el: el,
		columns: [
			{
				header: '번호',
				name: 'num',
				align: 'center'
			},
			{
				header: '지역',
				name: 'location'
			}
		]
	});
	
	currentGrid.resetData(newData);
	
	Grid.applyTheme('striped');
}
//weatherAPI 이용해서 날씨정보 가져오기
function getWeatherInfo() {
	const key = "xZFQ%2FugPEluUDWNmYfJqVlKf9JGhVHzp%2BMDgsnqGR95l2VJejxMTkj06vrErBZfEZnt84ybQVuFKToMaVBJkvw%3D%3D";
	let baseURL = "http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtNcst?";
	let param = {serviceKey: key, numOfRows: '10', pageNo: '1', base_date: '20151201', base_time:'0600', nx:'18', ny:'1'};
	$.ajax({
		url: baseURL,
		dataType: 'xml',
		success: function(data) {
			if (!!data) {
				setWeatherInfo(data);
			} else {
				alert('오류!');
			}
		}
	});
	
}

//api로 가져온 데이터 화면에 매핑
function setWeatherInfo(data) {
	$.each($(data).find('location'), function() {
		const cityName = $(this).find('city').text();
		
		
	});
}