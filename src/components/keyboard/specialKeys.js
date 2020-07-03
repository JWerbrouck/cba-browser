const specialKeysFirefox = [
	{ keyCode: 226, keyName: "oem_102" },
	{ keyCode: 188, keyName: "oem_comma" },
	{ keyCode: 59, keyName: "oem_period" },
	{ keyCode: 58, keyName: "oem_2" },
	{ keyCode: 61, keyName: "oem_plus" },
	{ keyCode: 16, keyName: "rshift" },
	{ keyCode: 13, keyName: "return" },
	{ keyCode: 220, keyName: "oem_5" },
	{ keyCode: 165, keyName: "oem_3" },
	{ keyCode: 160, keyName: "oem_6" },
	{ keyCode: 164, keyName: "oem_1" }
];

const specialKeysChrome = [
        { keyCode: 226, keyName: "oem_102" },
        { keyCode: 188, keyName: "oem_comma" },
        { keyCode: 190, keyName: "oem_period" },
        { keyCode: 191, keyName: "oem_2" },
        { keyCode: 187, keyName: "oem_plus" },
        { keyCode: 16, keyName: "rshift" },
        { keyCode: 13, keyName: "return" },
        { keyCode: 220, keyName: "oem_5" },
        { keyCode: 192, keyName: "oem_3" },
        { keyCode: 221, keyName: "oem_6" },
        { keyCode: 186, keyName: "oem_1" } 
]

module.exports = {
    specialKeysChrome,
    specialKeysFirefox
}