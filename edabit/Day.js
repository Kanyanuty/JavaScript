function getDays(date1, date2) {
	return (date2.getTime() - date1.getTime()) / (1000*60*60*24);
}


