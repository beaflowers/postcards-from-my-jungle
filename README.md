## Postcards From My (Underwater) Jungle

Note: Images and Audio folders are both under the Assets folder.

Training the image model took me so long, but it was actually because something was wrong in my settings - I was training the model with a different size image than the sizes I had in the dataset, and so everything was coming out very strange. At first I assumed I needed more iterations, so was doing upwards of 150+ epochs, which took ages... And then realized the size difference. After THAT, it was actually a struggle to get something more dreamlike or imaginary - since training at 100 epochs resulted in images that looked fairly accurate to my original dataset, which didn't feel like it fit the assignment. So then I went aaaaaaaaalll the way back down to a relatively small number of training iterations, to get something that felt sort of like the original sea creatures I had in my data set. 

The sounds were easier - though often when asking for "ocean sounds" I found that it would generate seagull noises, which is not what I was going for. Did several versions seeking out whale and dolphin noises. The whale ones it gets better, and it never really got to dolphin, though I was able to immitate it by asking for clicks, squeaks, and whistles. I tried using a different audio training set, but couldn't get it to work properly? So went with the default one. 

Generating the text was pretty easy, I just asked Codex to do it within VSC. It kept trying to insert human language or make it more poetic though, so had to be sure to limit it to just generated sound effects.

Quality of the images could be improved with more training epochs. Unsure how to improve the quality of the sound, honestly? I tried changing the inference steps and number of waveforms used and I didn't hear much of a difference - I'm not sure if that has to do with what I was asking for, but I would imagine that would be a way to get something that sounds better... 
