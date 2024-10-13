// Partially rewritten and adapted from original, but needs more work, or complete rework.
document.addEventListener("DOMContentLoaded", () => {
	const zone1 = document.querySelector('#zone_1')
	const zone2 = document.querySelector('#zone_2')
	const zone3 = document.querySelector('#zone_3')

	if (!zone1) return

	const zone1Max = Number(zone1.dataset.max)
	const zone2Max = Number(zone2.dataset.max)
	const zone3Max = Number(zone3.dataset.max)
	const quizMax = zone1Max + zone2Max + zone3Max

	const circleParams = {
		value: 0,
		textFormat: 'vertical',
		animationDuration: 1000
	}

	const zone1Steps = Number(zone1.dataset.steps)
	const zone2Steps = Number(zone2.dataset.steps)
	const zone3Steps = Number(zone3.dataset.steps)

	const zones = {
		"zSteps1": zone1Steps,
		"zSteps2": zone2Steps,
		"zSteps3": zone3Steps
	};

	const cProgressB = new CircleProgress(".progressB", {
		max: quizMax,
		...circleParams
	});
	const cProgressG = new CircleProgress(".progressG", {
		max: zone1Max,
		...circleParams
	});
	const cProgressY = new CircleProgress(".progressY", {
		max: zone2Max,
		...circleParams
	});
	const cProgressR = new CircleProgress(".progressR", {
		max: zone3Max,
		...circleParams
	});

	$('#nextBtn').on("click", () => {
		nextPrev(1);
	});

	$('#prevBtn').on("click", () => {
		nextPrev(-1);
	});

	var activeZoneTabs = 1;
	var currentTab = 0;

	function wait(ms) {
		let start = new Date().getTime();
		let end = start;
		while (end < start + ms) {
			end = new Date().getTime();
		}
	}

	$("#quiz-game-btn").on("click", function () {
		$('#main-box').fade("out", () => {
			$('#checks-box').fade("in")
		});

		createSteps(1);
		showTab(currentTab); // Display the current tab
	});

	function createSteps(n) {
		var str = "";
		for (let index = 0; index < zones["zSteps" + n]; index++)
			str += '<span class="spa-quiz__step has-radius-rounded has-background has-border"></span>';
		$('#steps').html(str);
	}

	function showTab(n) {
		var x = document.querySelectorAll("#zone_" + activeZoneTabs + ">.tab");
		x[n].style.display = "block";
		//... and fix the Previous/Next buttons:
		let nextBtn = document.querySelector("#nextBtn")
		let prevBtn = document.querySelector("#prevBtn")


		if (n == 0) {
			prevBtn.dataset.spaVisibility = "hidden";

		} else {
			prevBtn.dataset.spaVisibility = "";

		}

		if (n == (x.length - 1)) {
			if (activeZoneTabs == 3)
				nextBtn.innerHTML = nextBtn.dataset.results;
			else
				nextBtn.innerHTML = "Zone " + (activeZoneTabs + 1);
		} else {
			nextBtn.innerHTML = nextBtn.dataset.next;
		}
		activeStep(n);
	}

	function nextPrev(n) {
		var x = document.querySelectorAll("#zone_" + activeZoneTabs + ">.tab");
		x[currentTab].style.display = "none";
		currentTab = currentTab + n;
		if (currentTab >= x.length) {
			let spaQuizDiv = document.querySelector(".spa-quiz")

			if (activeZoneTabs == 3) {
				showResults();
				return;

			} else {
				$("#zone_" + activeZoneTabs).hide();
				activeZoneTabs += 1;
				$("#zone_" + activeZoneTabs).show();
				currentTab = 0;
				createSteps(activeZoneTabs);

			}

			spaQuizDiv.dataset.active = `zone${activeZoneTabs}`
		}
		showTab(currentTab);
	}

	function showResults() {
		$('#checks-box').fade("out", () => {
			$('#result-box').fade("in", () => {
				var totalP = 0;
				var pGreen = 0;
				var pYellow = 0;
				var pRed = 0;
				let resultsText = document.querySelectorAll(".spa-quiz__score span")

				$(".ans:checked").each(element => {
					var val = parseInt(element.value);
					if (val == 5)
						pGreen += val;
					else if (val == 6)
						pYellow += val;
					else
						pRed += val;
					totalP += val;
				});

				resultsText.forEach((text) => {
					text.setAttribute("class", "")
				})

				cProgressB.value = totalP;
				cProgressG.value = pGreen;
				cProgressY.value = pYellow;
				cProgressR.value = pRed;

				var i;
				if (totalP <= 50) i = 1;
				else if (totalP <= 150) i = 2;
				else if (totalP <= 220) i = 3;
				else if (totalP <= 300) i = 4;
				else i = 5;

				// TODO: hide --> show?
				const resultClasses = "is-active has-background has-radius-normal has-text-info has-text-weight-bold px-4 py-2"
				const resultSelected = document.querySelector(`#result${i}`)
				const titleText = resultSelected.dataset.title
				const titleTag = document.querySelector(".results__title")

				titleTag.innerHTML = titleText
				resultSelected.setAttribute("class", resultClasses);

				if (i != 5) $("#rs-info").show();
			});
		});
	}

	function activeStep(n) {
		var i, x = document.getElementsByClassName("spa-quiz__step");
		for (i = 0; i < x.length; i++) {
			x[i].className = x[i].className.replace(" active", "");
		}

		for (i = 0; i <= n; i++) {
			x[i].className += " active";
		}

	}
});
