function isExact(n) {
	let a = 1;
	for (let i=1;i<=n;i++) {
		a *= i;
		if (n === a) return [n, i];
		if (n < a) return 'Not exact!';
	}
}

console.log(isExact(24));