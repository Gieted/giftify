import { Injectable } from '@angular/core';
import { Gift } from '../shared/gift.model';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  giftList: Gift[]=[
    {name: 'book',
    ageMin: 15,
    ageMax: 99,
    price: 40,
    imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZy3kJluBGb6JUy0wKaoKsBeJRRk6gSxJeg&usqp=CAU'},
    {name: 'bike',
    ageMin: 5,
    ageMax: 60,
    price: 900,
    imgPath: 'data:image/jpeg;base64,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'},
    {name: 'car',
    ageMin: 18,
    ageMax: 80,
    price: 150000,
    imgPath: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGRgYGBgYGBwaHBocHBoYGBoZGRgYGhwcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHzQrJCs0NDQ0NDU2PTQ0NDQ0NDQ0NDQ0MTY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKIBNwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEUQAAIBAgIGBgYIBAYBBQEAAAECAAMRBCEFEjFBUXFhgZGhscEGEyIyQtEUUlNygpLh8BVD0vEjYqKywuIWM0Rj0/IH/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACwRAAICAQMDAwMDBQAAAAAAAAABAhEDEiExBEFRBRNhcYGhFBWRIjJCsdH/2gAMAwEAAhEDEQA/APV4RIS5QWES8LwBYkLwvACEIQAhCEAIQhACEIQAtC0IQAtC0IQBIRYWgCWhaLCAIBFhaFoAkLQhAEheLCLAl4l46FosDbwvFtEtACEIQAvCEJIC8ITH0ljSTqIchtI3nhykxjqdFZSpF46QS9tbuNu2EwLQmvtoz9xnVh4oMZaAMwNrJLxrNARbQBgjgYloQB1oWiAx0AS0LRYsASJHRLQBIRYyrUCC7H9egQB8arA7CJk4jFs+zIcB5xcOwG0m/R07JfS6K6lZrQlenXvvvbbJUqX2i0oWHwgDCADEDM7pHSrq3um8ztJYvW9hTlf2jx6JEmI1Blme7+00UXRVyVm0TvkTYlBtYTNohma7Nt2AbLcZPVpFl2C/jaVpJ0xqtEz6QQfFfkCZMlVSL37cpgvQYG9t8lLmxNj7WQy3SzguxVSfc22YDaQOuVH0igNlu2duA5zIe5OYNspMaNgRvv8A2jQlyNTfBs0awYZSW0wVxBVlA4nsJl2ljjdhttmO+Q4MspJmjaFpnYfSJPvADPs/Yl9HB2Sri1yWTTFtDViwkATViasZicQEW56hvMyMRj3f2RkDlYb+i8tGLZEpJDtIY251EOW88egdEzwkk1LGxBjrCbKo7IxbbZDu2Qk1SwhFkUdHqxCI8QYTnOmhgjhK9SuNi+0e6IlRtpiiLLIhaQGsbZSKsxYe0TyGyTQsmSsCbDZxko6JQoOB+++XAbbIaoRdkgaLeN17nZ1xbSAKIsjdgouTYSpU0gfhHWflCi3wHJIs4jEqgzzO4TIq1S5uf7RGzNybkxrNNoxozlKxVHRHFcgd/nBKlhlGsb5n+8ncqOpswuw2yZcSWGrsO89HRwlQtF9aEFyQNuZNocQpDwrKb32bJLicaWXVBOe35CY+J05QX3qqk8BdvC8zq3pZhl3seS28TLaW96KuaWyNuIz8JzFT02oDYjnsErt6dUvsz+b9JbSyuo7GlWZbZm3OalCqHGsLg7CJ5z/5yn2R7ZLh/TtRspn80pKF8Foyo76uzKMhe/dIaKa4vu1SLbw1/CcvT/8A6EN9Fj1m/cJOnppSOfqnU9DDw2zOnFbmsU58Jv6I6FEIyP72fvsjmzmPT9L8Odqv2D5y1Q9JMMTfXYc0P/G8rqNfYmuw/FUWHtW25efziISLHiLmXBj6NUaqVFJO69j2HOP9TYW37jbsllO1uYyxuL3KL1bHhfM8t0atY3ABIF7ZbczxhVQ3OdyBcmJRS5B65qqozt2aVGoyHVLX8pY+k3GTW6bfOZzsxF942jiN1uEbhqp2Ne1rXmbje5pqrYdUphmJLZ9OztkKZHb3d8ndtbYD1DvMiK2+EyUyGRu1zxjbx7Ll+nnG7JZMqGrxNoQBB6BxhFijcRjvJiuoO28LRyuN057N6G01ytHFWvt/fTHFuiNvbdIsC6pjHA2Z5/vbAvGPX3frJSbDI2pZ8JNTOWZkDV+kDxjNS/nL1fJX6Fg4lRkMz3dsbUxBGw7d395D6v8AdxJGpgjdf99sUhbIC+scz18JC5G6WhhRG/RbZlhLJoo0yOnbeJG2Zj6jqqk3FhtJ2DmTMfGaWAG3VHEjM8lOzmeySlb2IfBo1HA29XE8hvlStjQN/VkTy4DtPKYNXTGtfV6yd/M7Ty2TNxGL3s1hxPl+k0UfJTUuxvYjSm4G3LM/Idky8TiNa7MFtxc37pz+I0wB7NPM8T5CUqpe2u75nYDx5S2yHJex+mEUlVRXttysoPKUBXapkNRL8ABfmRn3SrSRSd7c9lzvsNsuO+qpyUEA7AANkrqLaPIuDwiu2qCztuA9m9twLb+qKxRRmhHSbt/ttMyjpIo6upN1YEcMpLp7GK7u6ZI92HQTmw7byNbstpSRK+KpnZqdaf8AYyGk7VDZLBQfeCAX6FHnKeBwLVyGI1U7C3TymqHX3EyQZEj4ujoXxmMsjbqJ34eljCHu5tl2XdkoqBRa9+JN9Uc7e8e6NrpcX9aLdncJplFVGFkuCAthcttub3tYeYmRVwis4sctYa2Vsr5+cRiuXyZ5epnPZf0rslsRoi3zcEcM5Cgs5scrkD2iM9vGWMVS1DYLkb52yI3TLrizgg8P1lmkYWzXTFFficcmDDrvebGi/SbEJkHDLwvb/SbjwmCroo9pRDXS/u5c5bSiFkaVWeiaM9MqNQhH/wAN9nWOjf1EzqleiVDB1sd4z8J4XXsTmMpb0dpyrhmBDFk+JGzy32v++UOL8kaovtR7PU1LXD3HzkDsAR7dzy3cNuUxtF6RSugKZE7uOV7qd+3Ztlp0kxivJnNyjyjUasoPslVIyveRjEoBmdY33ZdszLWkimToRXWyzUxV9gsP3vkSMdgPb+sazdMmoUwRdiAI2SJ5JxszJPYD3xY7Vp2ysx6c/CEzsvRp/SFXaCI5cQp2ecrFGP8A+jEFJujtaYWblp8Sq7TIWxQP9jI2pOd47f0jDh349/6SU0CY4gcT2RjVgePZGrhm+tA0OJ75OoihDUA+E90kSqDsvM/E4xEy1tY8NsqJi3bJVsvHZJSbJ09zbuCJIg5TJR7D2mPIRx0gF2Dtl9Eimxp1GYZKNvX37pl401R7tNnP3gqjmSb25CRPpZuIkD6RY/F2Syi0EvKKeKw+JY63qnZrZEtTVV6FXXy55npmLi9C4tzdqZPRr07D/VOhbGE/Ge2RVq4UXdwo4sbeMum0VeK+Tl6uhsUo9miSfv0/65lYnQeMY+1RY8npn/nOqq6apA5Mzn/IpPebDvkD6Vqn3KJA41Gt3D5xrXkuumk+xzqaKxKD2cM9+OtTPg8q1dF4pjc4eplwsfOdFV0jiN9WknLVJ/1EynUqF/fxRPQAxHhaUlM6IdFJ9zkqmM1GsVZSDmCLHrEZWxRqmwDn/Kqk+G2dM+Eo/XY/g+cPUU/rv+Uf1TF5GvB2R9MjLlv+Dk/ork6opvcbiCPG01NH6CdiPWZgG4UbAembSYUfASeageZkqYd92rMp5pNUqO7pvTMOOWqVv6rYxNNY8Ux6pMzsa3HeuW4b+zjKGFr2UXa1r3ztncmaOktDg7V1b3sQWOY23BmfhNFarANTL7bkC4ty2gyIzjTS2Zj1HTZ3mWSatdq4XgsLjbZ+st+L9ZfwmKpOrB6yBhbVuVBJPjLa6Ap/UHZ+kmTQKDYg7DKqaXDZ1S6bJONOMfuZHttle4HdM/FUjrWvunUPoymmbKBzHzOcdSwlNrhFUkZ5Ds8Ju86a4PNXpMk6c1fgwVW6i5FuYjHw3AidWuEA2IOwR/qzH6n4L/sz7y/By4wrMM/A+cloaNBPtsT0ZW7N/WZ0Qw2ttI7QJBXw+q1koh7W9okW6gZH6hsuvSseNW239rLWAqKqhAyIMjdmuQeOWwzqsJikZM6qM4G42Ldu+coiXS7KEbPJdnQPCRVBa475WOdLhfk1y+ne5FW/xR2Tk8Nu/bfrkZbjOe0W5ByNh57p0rBWTXtY5awAG++fLKdMcyfJ4nU9C8O6dklKkGzvlLgAAtlM9MUqA+1YDcQe6POk6Y39Put8pEp2cyi0Wy46YSomlEIsDf8ACflCRaJplkYpvrQfFN9bvmWHXYDE9YvGcOuRsav0l9x7404t+MzNc7j3S1ou7PrsPZTM8/h+fVJjKUnSA/Suk2w6qXawK3Ntt7kBBxbKYi6Tq18/cT99pmR6S6foNX/xHJWndUAV2AzN2uotcnp4SkfTLDAWDm33H+U7YqKSTZpCkvn57HYUWRP8x6Y6rpQDgJx2P04KYUuGQP7usrLfYeHSO2Zp0+jbHXrMu5RRrHCp7tr+Ts6+lzxlGppIzl20iG2ODyIPhEpYm7bCZV5oo6YdJa2VnT0azubICT0Zyas6U/8A1agL/Up+03WRkvWYuHwoNIO9Y6mqCaWHGs9iL2cj3e+Zh03RTKjhGFviqJ6w87MwUflkPI3wc09MXRI2NqudWkuoOgaznr2jqktD0bxLnWNF2P1qgYd7WjMN6QYiq60lbEAPkPVqEF/8qouQ3b5p4HQ+MuXdCCNhruCt9xsSAeu4ld+5m8rXCono+jGJ2eyg6GQf8pS0t6J4hF1mGsLEkl0AAG0m7bJ0tLG0cMPWVqq1a25UOsqnnsnLaf8ASR8SdUnVS+SA7eBY/Ee7omU5Kt2dvR48+WeypeWjlXo9Fv30R1LDsxCpck7AP3s6ZpU8EzEADbsmiusrHDYMA1LD11Vh7KX3dJ4L4znTbex7vUTh08LZnnRjoL1XROgnP5SbDUFJBDK432N/CVMd6NYcXNWrUqudrC5z4Xsey85zGaJagTUw1RrrmV2MBy3joImyi/J5H7kr/t2+u51+JxVFLEsLa1gRe1/qngegy/haitnsGVtguCL3BvczA0DpFMWjJUVS+WuLe+NzD95To6rpQp61gAAFVRlc7gJjLbnk9DHmeRpxdprjvYVqCPcFbi9+627rjaeGC+6lv30zDfStZiSDq7MgB07znIWxNU7Xf8xHhMtR3qMkqs6XUbgo5n9IxqlveqIvZ5mcs6sdpvzMb6rl2xqDg/J0OIqUGtr1Fa2zIHwBkS47DJkrN06oI8hMP1fSIhUbyJOplPbhd9zaXS9ED3HPZ5tFOm6W6iesr+swQBx7ooUdMamNK+TcOnl3Uh2j5Ri6YH1P9X6TGC7xujkkWy8YR7HW0aYqIGXYRrZ7gNvflM6shJy2cTJqVZvcXNUCpYfHUOZXlfbymXpnC076tVvWPvGsQqn6qgcOJzmsItnB1XWRwbPdvhf9N7RlM3F+M2auklw9agrE+2WuAL2Co2Z6LmeY4LHNg6qkFjQLAMpNyt9jA8P1G2dTisT9Ix67NSmnsC+26gk8rt3TaT0xPIyZI502+yb+53f8XptsNx939ZImNQ/DOepon1bcjbyj2qIPZAt1zFSPPOhXGU+A7ITnWrDo7f1hJ1AlpYemP385IMMm4GUkbhcy2lRpUgkCAcZzfpJpqpR16SsAjhLHPWUke2BuNxbpGfHLcq1TxmHpvR9J/bqu5ZjkqhVCgZDMgknK98tstFSb2LRq1Zxi4kjK/dIq1UMLMoN+gXmvV0dh/hdxz1T5CVX0VTOyqetP+0tpmj0YVJbooVCp1NcByqJTW4uAqLYWHSbn8UQin9ROyWzohd1Ydan5xraIO6qnYw8ocpGsccIqkip/hfZr2S0mLA2ZRf4O+50PW3yifwh/rp+Y/KRb7msFodx2LtJywBGfSI8q53GUF0dVXY6jjZyPARq4esPjt+Mx9jf35eDQVHBuMjJ/X1D7zMemZJoPvcfmaHqzvcdpi2WUtTto1vVlt56zLuGohc7A98wKdEHLXW/OWV1kOTj8JuJnKVcnbhdrY2cfpb1S+yL1H9hBwJyBPX4GSfSRhqIoobs3tVG3u7Zm56dvK3TMA1NfErrfAhc8zkOy3fL+I1dUuzgNnZbE9Jvwzy6ptjjtfk+f9Tza8ziuFt9zPxOKZnUX2y6ia+TZH4W4H5dEwXqMrh2BUEZXBsb7+U1WxtlAVbttvNjzvkxajnC4pagFgWOsu7bZ15ZgjnOo0hpBqhG5RmAN3PpmH6V0bornaQjdeat3FOyWMO11U8VXwE58y4Z7PpMt2n2osLvueHnFIEjB2wvMKPdsUqI0qOEUiCoTs7s4ohtjcuEAZaTR1Q/ARz9nxlhNDt8TKOVyf31ySrZmqcoXmtT0agA1nY5DZYfOSijRGxL8yx/SKZFOjGRL8xH4emWaw2Zk9AG399M0no0W2gp0g27jEU06dNwrazvkLA2AByz2dPXDW+5KelbC4HHBQSoN6anbvqPtI5DL8U5x62vUXWOesSZPhapK1NU5+sP+nVWR4rCKEVw59aXIZAMgnshST0k7J1xVRR8p1c9eaT+S1jsKGpsh26pI5b/I9Qi+jCuzUXvmPYa5N/ZuoHZbsj8BSBfVJJbUcG/DVMtehlG98vjqHjvI85GRWiuKVKX0Oq9WpFtbvvGHBoDcZ8zLKYInYrnkpPlHDRjH+W5/C0ooMwopMg6B2QmiujTs9W3XceMJOgUVxQbjHikROZbTbj/3KH8Fv+JjF06fixB6kH/1zb22V1I6grbM2nnXprjmXEkI5ACrexIF+kb9gm22nkO16h5BR/wmD6S41MS+uKJp2Fhq+3rDKxOy2Q2c+Mj22ty0ZKzEGl6o2sDzAjhpp96qe2Q1KK/WA5gjyMjOHG5l7beNoo2jOa4ZdGmzvQdRMeumxvQ9szRhSdljyIPgYhwr/VPYflK0jRdRmRspp1N6H99UsU9OIctXvt4ic62HYbQeyNFI8DGleTWPW5l2/B1D6U4JbmfIWlKq9Rz7+qOCjzveVsIjsLWvbfxEtJhn+qe6Yu0zujN5UtV0/sV/oJPvOT1fMx38JUgnXOWZyEuphn4d4+cZiUYLbK5yyN8t+yNUuC76XCot6f8AZT0Lh/aY8Ft1k/oZ0NPcLbxzlTRuAZE1iNpvxtuAPD9ZaGRAmeR3I7uix+3hqqvco4WtrYiueS9gA8pq46h75vaxM5nAVf8AGqj6xbxM6mrRNV0F/YYB7cbj5zsiqSR8tmlqnKXlsraU0uatBKWqtqY1QLAu1ze/E/p0xKdfVChc/YFzaToVpVC7IDb2RfjubqlUO1StqD42y6L7eqSZ3sN9LMqFK+0oT2ulvCGFT2EHBR4CR+mFUNVWmuxSiflzPewHVJfWLxtOfM+D2fSlWqT+EWkRc7kDPffgOAMnX1I952PQq272+UzC6b3PUP0jC9Ib3Mx0nsSyxXdL7mwMZh12IW+8QfO3dHHToGSoAOdu4CYn0ikNqN2/rD6dSH8vtceGqZKi/Bk+oguZL+TUfTjbgo7fnKz6Xc7wOoSl/GKQ2U6fW5PhaJ/HwNgpD8LN4sZZRl4Mn1uNf5IsDHOd56u3dGmq7bmPbKrekrbnUfdpr5rHppt2y+lBep1/2pJ0S8GT6/F5LIVxtUjnYSRqoAsTMjGYwqRaotTW3o9zfpDe1KTaSb2gRY2I69ke1Ih+oYq5NDQNfWVx/mY9vteU1zhkR1dzrqQS1rgH6oIPDKctofEaj87W5jZOuNI1UIQix3E5p0HonSfPtu7K+imsaz2tqIwHSz5KPGdN6IYV6VLWN0Zr77GzHWzt+8pm4Oil0oJZgja9Zx8TC2qvaB2c506OBIe7JTaTXktB2+se0xufRIxUENcQVocR0RZH6yECjy+8QvOof0Q4Ve1P+0jb0Qb7VetSPMzbUjPSzmS4jPpAG+dM3oe/2idet8pC3odV+tT7X/ojUidJz5xIlXEKr52IPEec6Y+h1bin5j/TIn9EcQNiqeTL5kSrkEjkXomRGmZ1j+i+JH8u/Jk/qld/RnE/ZHtU+cgsc2KjDYSOsx4xDj42/MfnNp/RzEfYv1C/hIm0BiPsKn5G+UiiVJrhlFNKVR8V+dj+seNLv0dknOga/wBjU/I3ygNBV/sX/IflK6Y+DZdRlWykyIaXfgvZHrplh9X8v6yUej+I+xfsjl9G8Sf5R6yo8TI0RLrq864kyej6UVFFgFsdvsqfG8QaaD3LmxAJ2DPoFpCfRrE/ZH8yf1RD6N4n7JvzJ85DxxNF6j1C7/gycPWKuH6bnr2zudD4oOAmsA21GOw3zKHrzHXwnNf+N4n7E/mT+qW8JobFL7JosV+8mX+rZLnEb2M0dXcaoQk323Fr87yylBMEhepqvXddVBtCjeeXE9FpVw+FxwFlLKOl0PfcmWsJ6OFrtiDrs20XJ7TvkNijgcXi2ZywPIkAkkm5bPeSSYxsW52v4DwE9Op+jtBdlJPyA+IlhNFINiIOSj5SL+CyvyeULUdtjMeRPlJFwtVtiVD+FzPWVwoHHqEd9H6DJv4IPKU0LXP8p+tbeMnT0bxB/lEc2Qec9O9R0eEPU9HdFsUjzhPRTEHcg5v8gZMnohVO10HWx8p6D6vo7v0jkosdik8otikcGvoY++qvUhP/ACEenoU2+sLdCf8AaegJo+qdlNuyTLoatvS3MqPGLYpHnZ9Cz9oOZQ3/AN9o0+hbfbL+T/tnPR/4Ow950Xm48hD+GIPerJ1B28pG4pHnC+hbfbL+Q/1TSw/oy1rNWvyS2X5p2n0OgNtRj91CPExy08ON1VutR843JMjAYFKS6qdZJzJ4mXFUcR2y+HojZRv95z5COGLUe7RpjmGbxMUCkI4A7pbOkH3Ki8kXzEa2kah+Nuqw8JII1wznYjn8JhEbEudrOebGEEEWv0GGv0eEhJHHvgFB2C/aZJBNrmHrP3eNXCudiN+QyZNHVTsRu4eMAi9Z+8ousejvln+FVN6qObjyh/Dre9UpL+O/lGwKtzxiX6fCXBgqe+un4ULSRNHodjVW+6hHiIBnZ8TGk/u82V0Yu6lVb7xVfMSVdGW2UAPvP8rwDAv0w1umdB9FA2jDLzOsfKLrKP51IfcS/nFg59RfdeOFJvqH8pm2+Jp767n7qKviJE+Jo/8AzNzYAdxkAyjTYfD3RLcpotiqW6jf7zsYgx4Hu0aY/DeAZ1h0SdKDHYrHkplr+KVN2qv3UA8YjaRqn426rDwEUBiYCodiP1i3jJV0TV3pbmy/OQNiXO12P4j84w57T5xQLR0aR7z015v8ofQ0G2snUGbwlUKIuqIoFr1NAbajHklvGLagN1Q9aiVo3KSC562kNlInm7eUPpS7qNMcwW8TKsbeAXfp7j3VReSDziNpCqfjPUAPASrGGATPiHO12P4jIWz2m8SHXAC0LRDGmCR+qIWkcW8Ak1Y20ZeGtAHxZHeAkAfeEZCAdVVoqo9lQOQAlWo54mEIKlCtVb6x7TM6tWa/vHtMIQSaejaKtbWUHmAZu4XCU7e4v5RCEAkpzNxtZhezEdZhCAc/icXUv77fmMjdidpvCEARY6EJIARywhAHxDCEAURTEhAHiJCEAbAQhACBhCAKkDCEAGiGEIA2EIQBGkcIQSKINCEAVYhhCACwMIQBIQhAP//Z'},
  ];

  getList(): Gift[]{
    return this.giftList;
  }

  constructor() { }
}
