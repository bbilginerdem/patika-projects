// package main

// import "fmt"

// func main() {
// 	x, y := 10, 4
// 	sum, dif, prod := calculation(x, y)
// 	fmt.Println("Toplam: ", sum)
// 	fmt.Println("Toplam: ", dif)
// 	fmt.Println("Toplam: ", prod)
// }

// func calculation(num1, num2 int) (sum int, dif int, prod int) {
// 	sum = num1 + num2
// 	dif = num1 - num2
// 	prod = num1 * num2

// 	return sum, dif, prod
// }

// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"os"
// 	"strconv"
// 	"strings"
// )

// func main() {
// 	fmt.Print("lutfen not giriniz: ")
// 	grade, _ := getGrade()

// 	var result string

// 	if grade >= 50 {
// 		result = "Gectin"
// 	} else {
// 		result = "Kaldin"
// 	}

// 	fmt.Println(result)
// }

// func getGrade() (int, error) {
// 	reader := bufio.NewReader(os.Stdin)

// 	input, err := reader.ReadString('\n')
// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	input = strings.TrimSpace(input)
// 	num, err := strconv.Atoi(input)
// 	if err != nil {
// 		fmt.Println(err)
// 	}

// 	return num, nil
// }

// package main

// import (
// 	"bufio"
// 	"fmt"
// 	"math/rand"
// 	"os"
// 	"strconv"
// 	"time"
// )

// func main() {
// 	target := numRand(1, 100)

// 	fmt.Println("1 ile 100 arasindaki sayiyi bulmaya calisin")

// 	reader := bufio.NewReader(os.Stdin)

// 	for attempts := 0; attempts < 10; attempts++ {
// 		fmt.Println(10-attempts, "hakkiniz kaldi")
// 		fmt.Print("Lutfen tahmininizi yapiniz:")

// 		input, err := reader.ReadString('\n')
// 		if err != nil {
// 			fmt.Println(err)
// 		}

// 		input = string.TrimSpace(input)
// 		num, err := strconv.Atoi(input)
// 		if err != nil {
// 			fmt.Println(err)
// 		}

// 		if num > target {
// 			fmt.Println("tahmininiz daha buyuk, daha kucuk bir sayi giriniz")
// 		} else if num < target {
// 			fmt.Println("tahmininiz daha kucuk,")
// 		} else {
// 			fmt.Println("dogru tahmin", attempts, "seferde buldunuz")
// 			break
// 		}
// }

// func numRand(min, max int) int {
// 	rand.Seed(time.Now().Unix())
// 	return rand.Intn(max-min) + min
// }

// PACKAGEs

package main

import ()
