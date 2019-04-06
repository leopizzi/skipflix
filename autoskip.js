
// Send each DOM mutation through a filtering function.
const obs = new MutationObserver(mutations => mutations.map(matchAddedNodes));

// Send each added node through the matching and clicking function.
matchAddedNodes = mutation => mutation.addedNodes.forEach(matchAndClick);

// Try matching a node for the "skip" button and click on positive match.

matchAndClick = node => {
	if (node.nodeType === 1 && node.matches('.skip-credits')) {
		click(node);
		setTimeout(function() {
			if (document.querySelector('.button-nfplayerPlay')) {
				document.querySelector('.button-nfplayerPlay').click();
			}
		}, 500)
	}
}

// Click the node.
click = node => node.firstElementChild.click();

// Observe the DOM for changes.
obs.observe(document.documentElement, { childList: true, subtree: true });

