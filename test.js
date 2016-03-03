import test from 'ava';
import fn from './';

test('expects a haystack string', t => {
	t.throws(() => {
		fn({}, 'unicorns');
	});
});

test('expects a needle string', t => {
	t.throws(() => {
		fn('unicorns', {});
	});
});

test('finds needles in a haystack', t => {
	t.is(fn('the magical unicorn is magic', 'magic'), 2);
	t.is(fn('@@@@@@@@@@', '@'), 10);
	t.is(fn('@x@Y@x@', 'Y'), 1);
	t.is(fn('@x@Y@x@', 'x'), 2);
	t.is(fn('../../../../../../', '../'), 6);
});

test('returns a number', t => {
	t.is(typeof fn('yo', 'yo'), 'number');
});

test('returns 0 when appropriate', t => {
	t.is(fn('foo', 'bar'), 0);
});

test('is case sensitive', t => {
	t.is(fn('foo', 'FOO'), 0);
});
