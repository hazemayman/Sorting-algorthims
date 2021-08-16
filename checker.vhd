Library ieee;
USE ieee.std_logic_1164.ALL;


ENTITY ErrorChecker IS
	generic(n : positive := 5);
	PORT(
		clk , reset , load : IN std_logic;
		x : IN std_logic_vector(0 to n-1);
		y : OUT std_logic_vector(1 downto 0));
		
END ENTITY ErrorChecker;

ARCHITECTURE ErrorChecker OF ErrorChecker IS 

	signal size : std_logic_vector(0 to n-1);
	type state_type IS (a , c , b , d);
	signal current_state , next_state: state_type;
	signal counter : integer;

begin 

	Process1 : PROCESS(clk ,reset)IS 
	begin
		if(rising_edge(clk)) then 
	 		if(reset = '1') then 
				current_state <= a;
			else
				current_state <= next_state;
			end if;
		end if;
		
	END Process Process1;

	Process2 : PROCESS(current_state, x , load )IS 
	begin
			
			if(load = '1') then
				size <= x;
				counter <= 0;
			else 
				if(counter < n) then 
				case current_state IS
				when a => if(size(0) = '1') then 
						y<= '1' & '1';
						report "from a to b ";
						next_state <= b;
					  else
						y<= '0' & '0';
						next_state <= a;
					  end if ;

				when b => if(size(0) = '1') then 
						y<= '0' & '1';
						report "here is d " ;
						next_state <= d;
					  else

						y<= '1' & '0';
						next_state <= c;
					  end if ;

				when c => if(size(0) = '1') then 
						y<= '0' & '0';
						next_state <= b;
					  else
						y<= '1' & '1';
						next_state <= a;
					  end if ;

				when d => if(size(0) = '1') then 
						y<= '1' & '0';
						next_state <= d;
					  else
						y<= '0' & '1';
						next_state <= c;
					  end if ;
				end case;
				size <= size(1 to n-1) &'0';
				counter <= counter + 1;
			end if;
		end if;
		
		
	END Process Process2;
	
		


END ARCHITECTURE ErrorChecker;