import time
from RPi import GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

GPIO.setup(14, GPIO.OUT)
GPIO.setup(15, GPIO.OUT)
GPIO.setup(18, GPIO.OUT)
GPIO.setup(23, GPIO.OUT)
GPIO.setup(24, GPIO.OUT)
GPIO.setup(25, GPIO.OUT)
GPIO.setup(8, GPIO.OUT)
GPIO.output(14, GPIO.LOW)
GPIO.output(15, GPIO.LOW)
GPIO.output(18, GPIO.LOW)
GPIO.output(23, GPIO.LOW)
GPIO.output(24, GPIO.LOW)
GPIO.output(25, GPIO.LOW)
GPIO.output(8, GPIO.LOW)

GPIO.setup(17, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(4, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(22, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(27, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(10, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(9, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(11, GPIO.IN, GPIO.PUD_DOWN)
GPIO.setup(7, GPIO.IN, GPIO.PUD_DOWN)

try:
        def dartTouch(pinin,pinout):
                outputDictionary = {}
                outputDictionary[8] = [3,1]
                outputDictionary[25] = [2,1]
                outputDictionary[24] = [1,1]
                outputDictionary[23] = [0,2]
                outputDictionary[18] = [1,0]
                outputDictionary[15] = [2,0]
                outputDictionary[14] = [3,0]

                inputDictionary = {}
                inputDictionary[2] = [9,14,50]
                inputDictionary[17] = [20,16,1]
                inputDictionary[3] = [12,11,25]
                inputDictionary[4] = [5,8,2]
                inputDictionary[22] = [6,2,3]
                inputDictionary[27] = [10,15,4]
                inputDictionary[10] = [13,17,5]
                inputDictionary[9] = [4,3,6]
                inputDictionary[11] = [18,19,7]
                inputDictionary[7] = [1,7,8]

                isButton = False
                value = inputDictionary[pinin][outputDictionary[pinout][1]]
                multiple = outputDictionary[pinout][0]
                if(multiple == 0):
                        isButton = True
                        multiple = 1
                        if(value == 50):
                                multiple = 2
                                value = 25
                                isButton = False
                        if(value == 25):
                                multiple = 1
                                isButton = False
                if isButton :
                   print("ButtonPressed");
                   print(value);
                else:
                   print("OnDartTouch");
                   print(value);
                   print(multiple);
                time.sleep(0.8)

        outs = [14, 15, 18, 23, 24, 25, 8];
        ins = [17, 4, 22, 27, 10, 9, 11, 7];
        while True:
                for pinout in outs:
                        GPIO.output(pinout,GPIO.HIGH)
                        for pinin in ins:
                                if(GPIO.input(pinin)):
                                        print(pinin, ":", 1)
                                        dartTouch(pinin,pinout)
                        GPIO.output(pinout,GPIO.LOW)

finally:
        GPIO.cleanup()
